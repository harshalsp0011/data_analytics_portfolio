// Sales & Forecasting Dashboard Component
const salesForecastingReport = {
    id: 'sales-forecasting',
    title: 'Sales & Forecasting Dashboard',
    shortDesc: 'Comprehensive analysis of actual vs forecasted sales with geographic, product, and time-based insights.',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiMGQ2MGQ4NTYtNDNhYi00MTM3LThhN2MtOTAwYzJlM2IyM2ZkIiwidCI6Ijk2NDY0YThhLWY4ZWQtNDBiMS05OWUyLTVmNmI1MGEyMDI1MCIsImMiOjN9',
    fullDescription: `
        <div class="space-y-4">
            <p class="text-lg font-medium text-gray-800">
                <strong>Project Summary:</strong> This Power BI report is a sales and forecasting dashboard that analyzes actual and predicted sales across countries, product lines, time, and customer segments. It provides comprehensive insights into sales performance and future projections with uncertainty intervals.
            </p>
            
            <div class="mt-4">
                <h3 class="font-bold text-gray-900 mb-2">Key Features & Analysis:</h3>
                <ul class="list-disc list-inside space-y-3 text-gray-600">
                    <li>
                        <strong class="text-indigo-700">Overall Purpose:</strong> 
                        The report shows how sales are performing now (ACTUAL_SALES) versus forecasts (FORECAST_P50) and how this varies by geography, gender segment, product "silhouette" (product family), and sport category. It helps answer where sales are highest, which products drive most of the forecast, and how future uncertainty looks via confidence intervals.
                    </li>
                    <li>
                        <strong class="text-indigo-700">Geographic and Segment View:</strong> 
                        Includes a Bing Maps visual showing regions by country (USA, United Kingdom, Canada, Mexico, Japan, Hong Kong, and China). Features slicers for GENDER (Boys, Girls, Ladies, Male, Others) and SALESORG (United States, Others, Mexico, Japan, EMEA, Canada) to filter sales and forecast visuals by these segments.
                    </li>
                    <li>
                        <strong class="text-indigo-700">Time Series Analysis:</strong> 
                        Main line/bar chart shows "Sum of ACTUAL_SALES and Sum of FORECAST_P50 by Year and Month," enabling trend analysis over months (January–December) and years (2025–2027, possibly 2028). Compares how actual sales track against the P50 forecast level with monthly totals ranging from 8–13M values.
                    </li>
                    <li>
                        <strong class="text-indigo-700">Product Contribution:</strong> 
                        Visual titled "Sum of FORECAST_P50 by SILHOUETTE" breaks forecasted sales into product silhouettes (3930, 5950, 920, 940, 950, Apparel, and Others). Shows forecast values (e.g., 114.94M for silhouette 5950) and each silhouette's percentage of total forecast, with "Others" representing about 44% of FORECAST_P50.
                    </li>
                    <li>
                        <strong class="text-indigo-700">Forecast Uncertainty:</strong> 
                        "Upper Lower Confidence Intervals" chart plots Sum of CI_UPPER, Sum of FORECAST_P50, and Sum of CI_LOWER by Year and Month. This visualization indicates the forecast range around the P50 forecast over time, showing the uncertainty band for each period from January 2025 onwards.
                    </li>
                </ul>
            </div>

            <div class="mt-4">
                <h3 class="font-bold text-gray-900 mb-2">Business Value:</h3>
                <p class="text-gray-600">
                    This dashboard enables data-driven decision-making by providing visibility into sales performance versus forecasts, identifying top-performing markets and products, and quantifying forecast uncertainty through confidence intervals. Users can filter by customer segments and geography to focus on specific business areas and make informed strategic decisions.
                </p>
            </div>
        </div>
    `,
    tools: ['Power BI', 'Forecasting', 'DAX', 'Bing Maps', 'Time Series Analysis', 'Data Visualization'],
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
};
