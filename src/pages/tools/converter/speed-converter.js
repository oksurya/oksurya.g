import React, { useState } from "react";
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
const UNITS = {
  mph: {
    label: "Miles per hour",
    value: 1
  },
  kph: {
    label: "Kilometers per hour",
    value: 1.609344
  },
  mps: {
    label: "Meters per second",
    value: 2.236936
  }
};

function SpeedConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("mph");
  const [toUnit, setToUnit] = useState("kph");

  function convert(value, fromUnit, toUnit) {
    const convertedValue = (value / UNITS[fromUnit].value) * UNITS[toUnit].value;
    return convertedValue.toFixed(2);
  }

  function handleValueChange(event) {
    setValue(event.target.value);
  }

  function handleFromUnitChange(event) {
    setFromUnit(event.target.value);
  }

  function handleToUnitChange(event) {
    setToUnit(event.target.value);
  }

  return (
    <Layout >
        <header class="mx-auto max-w-2xl text-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Speed Converter</h1>
        <p class="mt-2 text-sm font-semibold text-gray-400">Convert speed with ease - MPH, KPH, MPS</p>
      </header>
      <div class="max-w-2xl prose mx-auto mt-10 lg:text-lg">
        <div class="relative px-4 sm:px-6 lg:px-3 flex flex-col gap-2">
        <div className="flex mb-4">
        <input
          type="number"
          value={value}
          onChange={handleValueChange}
          className="border border-gray-300 p-2 w-full rounded-md mr-2"
        />
        <select
          value={fromUnit}
          onChange={handleFromUnitChange}
          className="p-2 rounded-md bg-gray-100"
        >
          {Object.entries(UNITS).map(([unit, { label }]) => (
            <option key={unit} value={unit}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          value={convert(value, fromUnit, toUnit)}
          readOnly
          className="border border-gray-300 p-2 w-full rounded-md mr-2"
        />
        <select
          value={toUnit}
          onChange={handleToUnitChange}
          className="p-2 rounded-md bg-gray-100"
        >
          {Object.entries(UNITS).map(([unit, { label }]) => (
            <option key={unit} value={unit}>
              {label}
            </option>
          ))}
        </select>
      </div>
   
        </div>
        </div>
        <article className="mt-6 prose prose-indigo px-6 lg:px-8 prose-lg text-gray-500 mx-auto">
    <p>
    The rate Converter is a web tool that enables customers to quick and without difficulty convert speed between miles consistent with hour (MPH), kilometres in step with hour (KPH), and meters according to 2d (MPS). This device is crucial for absolutely everyone who regularly works with speed devices, such as scientists, engineers, and athletes.
    </p> <p>
One of the key benefits of the speed Converter is its ease of use. The device capabilities an easy and intuitive user interface that makes it smooth to go into the velocity cost and choose the gadgets to convert from and to. Customers can enter the speed cost in miles in step with hour, kilometres in keeping with hour, or meters in keeping with 2nd, and the device will straight away convert it to the opposite devices. The end result is displayed in actual time, making it smooth to peer the converted value.
</p> <p>
Accuracy is also a pinnacle priority for the rate Converter. The tool makes use of a pre-described set of conversion elements for each unit to ensure that the converted values are correct and dependable. This ensures that users can rely upon the device to offer precise outcomes for their speed conversion desires.
</p> <p>
The rate Converter is also a wonderful tool for learning approximately speed devices and how they're related. By using the use of the tool, customers can without difficulty compare and assessment the one-of-a-kind pace devices, making it a valuable aid for students and every person looking to extend their know-how of physics and engineering.
</p> <p>
Similarly, to its sensible makes use of, the velocity Converter is also an extraordinary instance of how generation could make our lives less complicated. By means of presenting a simple and intuitive interface for converting pace units, the velocity Converter saves time and reduces the hazard of human blunders, making it a useful tool for each person who needs to work with pace gadgets often.
</p> <p>
Usual, the speed Converter is an essential device for every person who needs to paintings with pace units. Its ease of use, accuracy, and reliability make it a valuable aid for scientists, engineers, athletes, and all people looking to increase their know-how of physics and engineering.
    </p>
    
    </article>
    </Layout>
  );
}
export const Head = () => <Seo title="Speed Converter Tool - Convert MPH, KPH, MPS Online"  description="Quickly convert speed between miles per hour (MPH), kilometers per hour (KPH), and meters per second (MPS) with our online Speed Converter tool. Easy to use and accurate." />

export default SpeedConverter;
