import { React } from 'react';
import Chart from 'react-google-charts';

export default function SkillChart() {
  return (
    <div className="w-[320px] sm:w-[500px] lg:w-[700px] xl:w-[1200px]">
      <Chart
        className="w-[100%]"
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Element', 'Skill Level', { role: 'style' }, { role: 'annotation' }],
          ['CSS/SCSS', 90, '#50bfc6', '90%'],
          ['HTML', 90, '#50bfc6', '90%'],
          ['Javscript', 80, '#50bfc6', '80%'],
          ['TypeScript', 80, 'color: #50bfc6', '80%'],
          ['React', 70, '#50bfc6', '70%'],
          ['Angular', 80, 'color: #50bfc6', '80%'],
          ['Python', 60, '#50bfc6', '60%'],
          ['Django', 50, 'color: #50bfc6', '50%'],
          ['Node.js', 60, 'color: #50bfc6', '65%'],
          ['MongoDB', 50, 'color: #50bfc6', '50%'],
          ['PostgreSQL', 50, 'color: #50bfc6', '50%'],
          ['Figma', 60, 'color: #50bfc6', '60%'],
        ]}
        options={{
          hAxis: {
            gridlines: {
              count: 0,
            },
            textPosition: 'none',
          },
          isStacked: true,
          height: 500,
          width: '100%',
          margin: 0,
          bar: { groupWidth: '70%' },
          legend: { position: 'none' },
          chartArea: {
            height: '100%',
          },
          animation: {
            startup: true,
            easing: 'out',
            duration: 3000,
          },
        }}
      />
    </div>
  );
}
