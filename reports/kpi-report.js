// KPI Performance Report Component
const kpiReport = {
    id: 'kpi-report',
    title: 'KPI Performance Report',
    shortDesc: 'Interactive analysis of orders, revenue, and profit trends.',
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNmVkY2E2YjctMGUyNi00N2ZiLWFhNWYtMmQyYjMwZmVhOGI0IiwidCI6Ijk2NDY0YThhLWY4ZWQtNDBiMS05OWUyLTVmNmI1MGEyMDI1MCIsImMiOjN9',
    fullDescription: `
        <div class="space-y-4">
            <p class="text-lg font-medium text-gray-800">
                <strong>Project Summary:</strong> I built this interactive KPI report to track key business metrics and identify high-level trends using Power BI Desktop.
            </p>
            
            <div class="mt-4">
                <h3 class="font-bold text-gray-900 mb-2">My Process & Contributions:</h3>
                <ul class="list-disc list-inside space-y-3 text-gray-600">
                    <li>
                        <strong class="text-indigo-700">Data Connection & Preparation:</strong> 
                        I connected to raw source data files and conducted comprehensive profiling and QA tasks to ensure data accuracy before analysis.
                    </li>
                    <li>
                        <strong class="text-indigo-700">Data Modeling:</strong> 
                        I designed a robust relational model by defining specific relationships between fact and dimension tables. I also optimized the schema by creating hierarchies and adjusting model properties.
                    </li>
                    <li>
                        <strong class="text-indigo-700">DAX & Calculations:</strong> 
                        To enable deeper analysis, I enhanced the data model by defining custom measures and calculated fields using DAX formulas.
                    </li>
                    <li>
                        <strong class="text-indigo-700">Visualization:</strong> 
                        I designed the final interactive report to visualize orders, revenue, and profit, allowing users to analyze performance over time and across different product categories.
                    </li>
                </ul>
            </div>
        </div>
    `,
    tools: ['Power BI', 'DAX', 'Data Modeling', 'QA Profiling'],
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
};
