import React, { useState } from 'react';
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"

import { TypographyStyle } from 'react-typography'
import typography from '../../../utils/typography'
const AdSenseCalculator = () => {
  const [impressions, setImpressions] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [ctr, setCtr] = useState(0);
  const [cpc, setCpc] = useState(0);
  const [revenueDaily, setRevenueDaily] = useState(0);
  const [revenueMonthly, setRevenueMonthly] = useState(0);
  const [revenueYearly, setRevenueYearly] = useState(0);

  const calculateRevenue = () => {
    const calculatedRevenueDaily = (impressions / 1000) * ctr * cpc;
    setRevenueDaily(calculatedRevenueDaily);

    const calculatedRevenueMonthly = calculatedRevenueDaily * 30;
    setRevenueMonthly(calculatedRevenueMonthly);

    const calculatedRevenueYearly = calculatedRevenueDaily * 365;
    setRevenueYearly(calculatedRevenueYearly);
  };

  return (
    <Layout>

    <TypographyStyle typography={typography}/>
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">AdSense Calculator</h1>
      <div className="mb-4">
        <label htmlFor="impressions" className="mr-2">Impressions:</label>
        <input
          type="number"
          id="impressions"
          value={impressions}
          onChange={(e) => setImpressions(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="clicks" className="mr-2">Clicks:</label>
        <input
          type="number"
          id="clicks"
          value={clicks}
          onChange={(e) => setClicks(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ctr" className="mr-2">CTR:</label>
        <input
          type="number"
          id="ctr"
          value={ctr}
          onChange={(e) => setCtr(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cpc" className="mr-2">CPC:</label>
        <input
          type="number"
          id="cpc"
          value={cpc}
          onChange={(e) => setCpc(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <button onClick={calculateRevenue} className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Calculate</button>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Revenue by Day: {revenueDaily.toFixed(2)}</h2>
        <h2 className="text-xl font-bold">Revenue by Month: {revenueMonthly.toFixed(2)}</h2>
        <h2 className="text-xl font-bold">Revenue by Year: {revenueYearly.toFixed(2)}</h2>
      </div>
    </div>
    </Layout>
  );
};

export default AdSenseCalculator
