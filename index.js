var options = {
    series: [{
    data: [21, 22, 10, 28, 16]
  }],
    chart: {
    height: 250,
    type: 'bar',
    events: {
      click: function(chart, w, e) {
        // console.log(chart, w, e)
      }
    }
  },
  colors: ["#246dec","e96dec","#783dec","#f16dec","271dec"],
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [
     ["laptop"],["tabs"],["camera"],["monitors"],["mobile"]
    ],
    labels: {
      style: {
        colors: "black",
        fontSize: '12px'
      }
    }
  }
  };

  var Barchart = new ApexCharts(document.querySelector("#bar-chart"), options);
  Barchart.render();

//   ___________mixed-chart 


      
var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 250,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    categories: ["jan","feb","march","april","may","june","july"]
  },
  };

  var mixchart = new ApexCharts(document.querySelector("#mixed-chart"), options);
  mixchart.render();


//   ___________horizontal-chart 

      
var options = {
    series: [{
    data: [300, 430, 248, 170, 540]
  }],
    chart: {
    type: 'bar',
    height: 200
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ["developer","designer","creator","writer","ux/ui"
    ],
  }
  };

  var horchart = new ApexCharts(document.querySelector("#horizontal_bar"), options);
  horchart.render();


//   ___________circle-bar 


      
var options = {
    series: [42, 47, 52, 58, 65],
    chart: {
    width: 300,
    type: 'polarArea'
  },
  labels: ['admin A', 'admin B', 'admin C', 'admin D', 'admin E'],
  fill: {
    opacity: 1
  },
  stroke: {
    width: 1,
    colors: undefined
  },
  yaxis: {
    show: false
  },
  legend: {
    position: 'left'
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0
      },
      spokes: {
        strokeWidth: 0
      },
    }
  },
  theme: {
    monochrome: {
      enabled: true,
      shadeTo: 'light',
      shadeIntensity: 0.6
    }
  }
  };

  var Circhart = new ApexCharts(document.querySelector("#circle_bar"), options);
  Circhart.render();

// ___________toggle-bar 

menuBar=document.querySelector(".menu_bar")
asideBar=document.querySelector(".aside")
closeBar=document.querySelector(".close")

menuBar.addEventListener("click",function(){
    asideBar.classList.remove("list")
});
closeBar.addEventListener("click",function(){
    asideBar.classList.add("list")
})


