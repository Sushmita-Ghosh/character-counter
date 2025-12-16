export function formatText(template, values, pluralRules = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value = values[key];
    const rules = pluralRules[key];

    // If plural rules exist for this key
    if (rules) {
      if (!value) return rules.none;
      if (value === 1) return rules.one;
      return rules.other.replace("%d", value);
    }

    // No plural rules → simple replacement
    return value ?? `{${key}}`;
  });
}

/**
 * | Case                           | Result  |
| ------------------------------ | ------- |
| plural rule + value = 0        | `none`  |
| plural rule + value = 1        | `one`   |
| plural rule + value > 1        | `other` |
| no plural rule + value exists  | value   |
| no plural rule + missing value | `{key}` |


formatText(
  "Estimated reading time: {reading_time_value}",
  { reading_time_value: 3 },
  {
    reading_time_value: {
      none: "less than a minute",
      one: "1 minute",
      other: "%d minutes"
    }
  }
);

"Estimated reading time: 3 minutes"

 */
