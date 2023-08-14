// $theme-utility-breakpoints
const breakpoints = [
  "card",
  "card-lg",
  "mobile",
  "mobile-lg",
  "tablet",
  "tablet-lg",
  "desktop",
  "desktop-lg",
  "widescreen",
];

/**
 * Show the active breakpoint
 */
export function Breakpoint() {
  // Use the `display` utility class, which if enabled and the breakpoint is active,
  // will show the breakpoint name
  return (
    <div className="uswds-devtools-breakpoints">
      🇺🇸 Active breakpoints:
      {breakpoints.map((breakpoint) => (
        <div
          key={breakpoint}
          className={`display-none ${breakpoint}:display-inline-block uswds-devtools-breakpoint`}
        >
          {breakpoint}
        </div>
      ))}
    </div>
  );
}
