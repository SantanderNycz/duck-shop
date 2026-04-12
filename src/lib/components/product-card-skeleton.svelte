<div class="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm flex flex-col h-full">
  <!-- Image placeholder -->
  <div class="relative aspect-square bg-muted overflow-hidden">
    <div class="absolute inset-0 skeleton-shimmer"></div>
    <!-- Category badge skeleton -->
    <div class="absolute left-3 top-3 h-6 w-20 rounded-full bg-muted-foreground/10 skeleton-shimmer"></div>
  </div>

  <!-- Content placeholder -->
  <div class="flex flex-col flex-1 p-5 gap-3">
    <!-- Title -->
    <div class="h-5 w-3/4 rounded-lg bg-muted-foreground/10 skeleton-shimmer"></div>
    <!-- Description lines -->
    <div class="h-4 w-full rounded-lg bg-muted-foreground/8 skeleton-shimmer"></div>
    <div class="h-4 w-2/3 rounded-lg bg-muted-foreground/8 skeleton-shimmer"></div>

    <div class="flex-1"></div>

    <!-- Price -->
    <div class="h-8 w-24 rounded-lg bg-muted-foreground/10 skeleton-shimmer"></div>
  </div>

  <!-- Button placeholder -->
  <div class="border-t border-border/50 p-4">
    <div class="h-11 w-full rounded-xl bg-muted-foreground/10 skeleton-shimmer"></div>
  </div>
</div>

<style>
  .skeleton-shimmer {
    position: relative;
    overflow: hidden;
    background-color: hsl(var(--muted) / 0.5);
  }
  .skeleton-shimmer::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: shimmerSlide 1.4s ease-in-out infinite;
  }
  @keyframes shimmerSlide {
    0%   { background-position: -200% 0; }
    100% { background-position:  200% 0; }
  }
</style>
