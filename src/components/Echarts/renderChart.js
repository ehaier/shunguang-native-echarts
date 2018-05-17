import echarts from './echarts.min';
import toString from '../../util/toString';

export default function renderChart(props, isFirst) {
    const height = props.height || 400;
    if (isFirst) {
        return `
            document.getElementById('main').style.height = "${height}px";
            myChart = echarts.init(document.getElementById('main'));
            myChart.setOption(${toString(props.option)});
        `;
    } else {
        return `
            document.getElementById('main').style.height = "${height}px";
            myChart.setOption(${toString(props.option)});
        `;
    }
}
