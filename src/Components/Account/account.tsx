import React from "react";
// import * as AmCharts from "amcharts3";
// // import * as am4core from "@amcharts/amcharts4/core";
// // import * as am4charts from "@amcharts/amcharts4/charts";
// // import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// // am4core.useTheme(am4themes_animated);
const Account: React.FC = () => {
  //   // let chart = am4core.create("chartdiv", {
  //   //   type: "serial",
  //   //   categoryField: "category",
  //   //   startDuration: 1,
  //   //   categoryAxis: {
  //   //     gridPosition: "start",
  //   //   },
  //   //   trendLines: [],
  //   //   graphs: [
  //   //     {
  //   //       balloonText: "[[title]] of [[category]]:[[value]]",
  //   //       fillAlphas: 1,
  //   //       id: "AmGraph-1",
  //   //       title: "graph 1",
  //   //       type: "column",
  //   //       valueField: "column-1",
  //   //     },
  //   //     {
  //   //       balloonText: "[[title]] of [[category]]:[[value]]",
  //   //       fillAlphas: 1,
  //   //       id: "AmGraph-2",
  //   //       title: "graph 2",
  //   //       type: "column",
  //   //       valueField: "column-2",
  //   //     },
  //   //   ],
  //   //   guides: [],
  //   //   valueAxes: [
  //   //     {
  //   //       id: "ValueAxis-1",
  //   //       title: "Axis title",
  //   //     },
  //   //   ],
  //   //   allLabels: [],
  //   //   balloon: {},
  //   //   legend: {
  //   //     enabled: true,
  //   //     useGraphSettings: true,
  //   //   },
  //   //   titles: [
  //   //     {
  //   //       id: "Title-1",
  //   //       size: 15,
  //   //       text: "Chart Title",
  //   //     },
  //   //   ],
  //   //   dataProvider: [
  //   //     {
  //   //       category: "Cat 1",
  //   //       "column-1": 8,
  //   //       "column-2": 5,
  //   //     },
  //   //     {
  //   //       category: "Cat 2",
  //   //       "column-1": 6,
  //   //       "column-2": 7,
  //   //     },
  //   //     {
  //   //       category: "Cat 3",
  //   //       "column-1": 2,
  //   //       "column-2": 3,
  //   //     },
  //   //   ],
  //   // });

  //   // chart.paddingRight = 20;

  //   // let data = [];
  //   // let visits = 10;
  //   // for (let i = 1; i < 366; i++) {
  //   //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  //   //   data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
  //   // }

  //   // chart.data = data;

  //   // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  //   // dateAxis.renderer.grid.template.location = 0;

  //   // let valueAxis: any = chart.yAxes.push(new am4charts.ValueAxis());
  //   // valueAxis.tooltip.disabled = true;
  //   // valueAxis.renderer.minWidth = 35;

  //   // let series = chart.series.push(new am4charts.LineSeries());
  //   // series.dataFields.dateX = "date";
  //   // series.dataFields.valueY = "value";

  //   // series.tooltipText = "{valueY.value}";
  //   // chart.cursor = new am4charts.XYCursor();

  //   // let scrollbarX = new am4charts.XYChartScrollbar();
  //   // scrollbarX.series.push(series);
  //   // chart.scrollbarX = scrollbarX;

  //   // this.chart = chart;

  //   // makeChart("chartdiv",
  //   // 			{
  //   // 				"type": "serial",
  //   // 				"categoryField": "category",
  //   // 				"startDuration": 1,
  //   // 				"categoryAxis": {
  //   // 					"gridPosition": "start"
  //   // 				},
  //   // 				"trendLines": [],
  //   // 				"graphs": [
  //   // 					{
  //   // 						"balloonText": "[[title]] of [[category]]:[[value]]",
  //   // 						"fillAlphas": 1,
  //   // 						"id": "AmGraph-1",
  //   // 						"title": "graph 1",
  //   // 						"type": "column",
  //   // 						"valueField": "column-1"
  //   // 					},
  //   // 					{
  //   // 						"balloonText": "[[title]] of [[category]]:[[value]]",
  //   // 						"fillAlphas": 1,
  //   // 						"id": "AmGraph-2",
  //   // 						"title": "graph 2",
  //   // 						"type": "column",
  //   // 						"valueField": "column-2"
  //   // 					}
  //   // 				],
  //   // 				"guides": [],
  //   // 				"valueAxes": [
  //   // 					{
  //   // 						"id": "ValueAxis-1",
  //   // 						"title": "Axis title"
  //   // 					}
  //   // 				],
  //   // 				"allLabels": [],
  //   // 				"balloon": {},
  //   // 				"legend": {
  //   // 					"enabled": true,
  //   // 					"useGraphSettings": true
  //   // 				},
  //   // 				"titles": [
  //   // 					{
  //   // 						"id": "Title-1",
  //   // 						"size": 15,
  //   // 						"text": "Chart Title"
  //   // 					}
  //   // 				],
  //   // 				"dataProvider": [
  //   // 					{
  //   // 						"category": "Cat 1",
  //   // 						"column-1": 8,
  //   // 						"column-2": 5
  //   // 					},
  //   // 					{
  //   // 						"category": "Cat 2",
  //   // 						"column-1": 6,
  //   // 						"column-2": 7
  //   // 					},
  //   // 					{
  //   // 						"category": "Cat 3",
  //   // 						"column-1": 2,
  //   // 						"column-2": 3
  //   // 					}
  //   // 				]
  //   // 			}
  //   // 		);

  //   // AmCharts.makeChart("chartdiv",
  //   // 			{
  //   // 				"type": "serial",
  //   // 				"categoryField": "category",
  //   // 				"startDuration": 1,
  //   // 				"categoryAxis": {
  //   // 					"gridPosition": "start"
  //   // 				},
  //   // 				"trendLines": [],
  //   // 				"graphs": [
  //   // 					{
  //   // 						"balloonText": "[[title]] of [[category]]:[[value]]",
  //   // 						"fillAlphas": 1,
  //   // 						"id": "AmGraph-1",
  //   // 						"title": "graph 1",
  //   // 						"type": "column",
  //   // 						"valueField": "column-1"
  //   // 					},
  //   // 					{
  //   // 						"balloonText": "[[title]] of [[category]]:[[value]]",
  //   // 						"fillAlphas": 1,
  //   // 						"id": "AmGraph-2",
  //   // 						"title": "graph 2",
  //   // 						"type": "column",
  //   // 						"valueField": "column-2"
  //   // 					}
  //   // 				],
  //   // 				"guides": [],
  //   // 				"valueAxes": [
  //   // 					{
  //   // 						"id": "ValueAxis-1",
  //   // 						"title": "Axis title"
  //   // 					}
  //   // 				],
  //   // 				"allLabels": [],
  //   // 				"balloon": {},
  //   // 				"legend": {
  //   // 					"enabled": true,
  //   // 					"useGraphSettings": true
  //   // 				},
  //   // 				"titles": [
  //   // 					{
  //   // 						"id": "Title-1",
  //   // 						"size": 15,
  //   // 						"text": "Chart Title"
  //   // 					}
  //   // 				],
  //   // 				"dataProvider": [
  //   // 					{
  //   // 						"category": "Cat 1",
  //   // 						"column-1": 8,
  //   // 						"column-2": 5
  //   // 					},
  //   // 					{
  //   // 						"category": "Cat 2",
  //   // 						"column-1": 6,
  //   // 						"column-2": 7
  //   // 					},
  //   // 					{
  //   // 						"category": "Cat 3",
  //   // 						"column-1": 2,
  //   // 						"column-2": 3
  //   // 					}
  //   // 				]
  //   // 			}
  //   // 		);
  return (
    <div>
      <h1>Account</h1>
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default Account;
