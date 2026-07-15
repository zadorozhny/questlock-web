"use client";

import { useState, useRef } from "react";
import { toPng } from "html-to-image";

export type CarouselSlide = {
  title: string;
  image?: string;
  body: string;
};

const CTA_SLIDE = { locked: true } as const;

type AnySlide = CarouselSlide | typeof CTA_SLIDE;

const AppleIcon = () => (
  <svg
    style={{ width: 11, height: 13, flexShrink: 0, marginTop: -1 }}
    viewBox="0 0 384 512"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

function CtaSlide() {
  return (
    <div className="carousel-slide-cta">
      <img
        className="carousel-slide-cta-img"
        src="/lilypad-with-ipad.png"
        alt=""
      />
      <p className="carousel-slide-title">
        Good Habits Come
        <br />
        Before Screen Time
      </p>
      <p className="carousel-slide-cta-name">Lilypad - Earn Screen Time</p>
      <div className="carousel-slide-ios">
        <AppleIcon />
        <span>Download on iOS</span>
      </div>
    </div>
  );
}

function SlideContent({ slide }: { slide: AnySlide }) {
  if ("locked" in slide) return <CtaSlide />;
  return (
    <>
      {slide.image && (
        <div className="carousel-slide-image-wrap">
          <img src={slide.image} alt="" />
        </div>
      )}
      <div
        className={`carousel-slide-body${!slide.image ? " carousel-slide-body--full" : ""}`}
      >
        <p className="carousel-slide-title">{slide.title}</p>
        <p className="carousel-slide-text">{slide.body}</p>
      </div>
    </>
  );
}

export default function CarouselBuilder({
  slides: initialSlides,
  caption: initialCaption = "",
}: {
  slides: CarouselSlide[];
  caption?: string;
}) {
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState(initialSlides);
  const [current, setCurrent] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const [captionText, setCaptionText] = useState(initialCaption);
  const [copied, setCopied] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const allSlideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const allSlides: AnySlide[] = [...slides, CTA_SLIDE];
  const slide = allSlides[current];
  const isLocked = "locked" in slide;

  const update = (field: keyof CarouselSlide, value: string) => {
    setSlides((prev) =>
      prev.map((s, i) => (i === current ? { ...s, [field]: value } : s)),
    );
  };

  const captureEl = async (el: HTMLDivElement, index: number) => {
    const dataUrl = await toPng(el, { pixelRatio: 3 });
    const a = document.createElement("a");
    a.download = `lilypad-slide-${index + 1}.png`;
    a.href = dataUrl;
    a.click();
  };

  const downloadSlide = async () => {
    if (!slideRef.current) return;
    setDownloading(true);
    try {
      await captureEl(slideRef.current, current);
    } finally {
      setDownloading(false);
    }
  };

  const copyCaption = async () => {
    await navigator.clipboard.writeText(captionText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadAllSlides = async () => {
    setDownloading(true);
    try {
      for (let i = 0; i < allSlides.length; i++) {
        const el = allSlideRefs.current[i];
        if (!el) continue;
        await captureEl(el, i);
        await new Promise((resolve) => setTimeout(resolve, 400));
      }
    } finally {
      setDownloading(false);
    }
  };

  if (!open) {
    return (
      <button
        className="carousel-trigger"
        onClick={() => {
          setOpen(true);
          setCurrent(0);
        }}
      >
        ✦ Create Carousel
      </button>
    );
  }

  return (
    <div
      className="carousel-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
    >
      <div className="carousel-panel">
        <div className="carousel-panel-header">
          <span className="carousel-panel-title">Carousel Builder</span>
          <button className="carousel-close" onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>

        <div className="carousel-workspace">
          <div className="carousel-preview-col">
            <div className="carousel-slide-wrap">
              <div className="carousel-slide" ref={slideRef}>
                <SlideContent slide={slide} />
              </div>
            </div>
            <div className="carousel-nav">
              <button
                onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                disabled={current === 0}
              >
                ←
              </button>
              <span>
                {current + 1} / {allSlides.length}
              </span>
              <button
                onClick={() =>
                  setCurrent((c) => Math.min(allSlides.length - 1, c + 1))
                }
                disabled={current === allSlides.length - 1}
              >
                →
              </button>
            </div>
          </div>

          <div className="carousel-edit-col">
            {isLocked ? (
              <div className="carousel-locked">
                🔒 This slide is the same on every carousel
              </div>
            ) : (
              <>
                <label className="carousel-label">Title</label>
                <input
                  className="carousel-input"
                  value={(slide as CarouselSlide).title}
                  onChange={(e) => update("title", e.target.value)}
                />
                <label className="carousel-label">Body</label>
                <textarea
                  className="carousel-textarea"
                  value={(slide as CarouselSlide).body}
                  onChange={(e) => update("body", e.target.value)}
                  rows={4}
                />
              </>
            )}
            <div className="carousel-actions">
              <button
                className="carousel-btn-secondary"
                onClick={downloadSlide}
                disabled={downloading}
              >
                {downloading ? "Saving…" : `↓ Slide ${current + 1}`}
              </button>
              <button
                className="carousel-btn-primary"
                onClick={downloadAllSlides}
                disabled={downloading}
              >
                {downloading ? "Saving…" : "↓ Download All"}
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-dots">
          {allSlides.map((s, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? " active" : ""}${"locked" in s ? " locked" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

        <div className="carousel-caption-section">
          <div className="carousel-label-row">
            <label className="carousel-label">Caption</label>
            <button className="carousel-copy-btn" onClick={copyCaption}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <textarea
            className="carousel-textarea"
            value={captionText}
            onChange={(e) => setCaptionText(e.target.value)}
            rows={4}
            placeholder="Write your TikTok / Instagram caption here…"
          />
        </div>
      </div>

      {/* Hidden slides for bulk export */}
      <div
        style={{
          position: "fixed",
          left: -9999,
          top: 0,
          pointerEvents: "none",
        }}
      >
        {allSlides.map((s, i) => (
          <div
            key={i}
            className="carousel-slide"
            ref={(el) => {
              allSlideRefs.current[i] = el;
            }}
          >
            <SlideContent slide={s} />
          </div>
        ))}
      </div>
    </div>
  );
}
