// $theme-utility-breakpoints
const breakpoints = [
  "XS min-width (0px)",
  "SM min-width (544px)",
  "MD min-width (768px)",
  "LG min-width (1024px)",
  "XL min-width (1280px)",
];

/**
 * Show the active breakpoint
 */
export function ActiveBreakpoints() {
  // Use the `display` utility class, which if enabled and the breakpoint is active,
  // will show the breakpoint name
  return (
    <div className="uswds-devtools-breakpoints">
      <div className="uswds-devtools-breakpoints-toc">
        <h4>Key</h4>
        <p>
          🌚 component types <br />
          🟢 Containor class <br />
          🔵 Row class <br />
          🟣 Lists<br />
          🧠 Fa & Glyph icon<br />
        </p>
      </div>
      🇺🇸 Active{" "}
      <a
        href="https://design.cms.gov/foundation/layout-grid/responsive-design/?query=ds-h3&theme=core"
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
