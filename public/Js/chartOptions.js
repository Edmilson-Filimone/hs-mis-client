export const lineOps = {
        layout:{
          padding:30
        },
        plugins: {
          legend:{
            display:false,
            labels:{
              color:'white'
            }
          }
      },
      responsive: true,
      maintainAspectRatio: false,
        scales:{
          y:{
            ticks:{
              color:'white'
            },
            grid:{
              display:false,
              color:'gray',
            },
            border:{
              dash:[2,6]
            }
          },
          x:{
            ticks:{
              color:'white'
            },
            grid:{
              display:true,
              color:'gray',
            },
            border:{
              dash:[2,6],
              dashOffset:6
            }
          }
        }
      }
      


export const barOps = {
        layout:{
          padding:30
        },
        plugins: {
          legend:{
            display:false,
            labels:{
              color:'white'
            }
          }
      },
      responsive: true,
      maintainAspectRatio: false,
        scales:{
          y:{
            ticks:{
              color:'white'
            },
            grid:{
              display:true,
              color:'gray',
            },
            border:{
              dash:[2,6]
            }
          },
          x:{
            ticks:{
              color:'white'
            },
            grid:{
              display:true,
              color:'gray',
            },
            border:{
              dash:[2,6],
              dashOffset:6
            }
          }
        }
      }

      export const polarOps = {
        layout:{
          padding:30
        },
        plugins:{
          legend:{
            display:false
          }
        },
        scales: {
          r: {
            ticks: {
              color: 'black'
            },
            pointLabels: {
              display: true,
              centerPointLabels: true,
              font: {
                size: 14
              }
            }
          }
        },
      responsive: true,
      maintainAspectRatio: false,
      }