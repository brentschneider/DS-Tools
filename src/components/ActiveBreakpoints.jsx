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
export function ActiveBreakpoints() {
  // Use the `display` utility class, which if enabled and the breakpoint is active,
  // will show the breakpoint name
  return (
    <div className="uswds-devtools-breakpoints">
      🇺🇸 Active{" "}
      <a
        href="https://designsystem.digital.gov/utilities/display/#responsive-variants-2"
        target="_blank"
      >
        utility breakpoints
      </a>
      :
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
