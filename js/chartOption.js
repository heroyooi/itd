var colors = ['#00bbfe', '#2f78ff', '#853cfc', '#00be9c', '#e3c208'];

var options = {
    barLine: {
        color: ['#eff5ff', '#bfd7fe', '#609cfa', '#2561e2'],
        title: {
            show: false,
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
        },
        legend: {
            show: false,
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
            top: '2%', // 그래프 영역을 아래로 이동
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['수도권', '강원', '충북', '전남', '경북', '경남', '충남', '전북'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    fontWeight: 500,
                    fontFamily: 'Pretendard',
                    color: '#bfd7fe'
                },
                interval: 0,
            },
            axisTick: {
                show: false // x축의 작은 세로선 숨기기
            }
        },
        yAxis: {
            type: 'value',
            position: 'left',
            alignTicks: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 10,
                    fontWeight: 300,
                    fontFamily: 'Pretendard',
                    color: '#bfd7fe'
                }
            },
            min: 250,
            max: 3250,
            interval: 250,
        },
        series: [
            {
                name: "값1",
                type: "bar",
                barWidth: 16,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [520, 520, 520, 520, 520, 520, 520, 520]
            },
            {
                name: "값2",
                type: "bar",
                barWidth: 16,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050]
            },
            {
                name: "값3",
                type: "bar",
                barWidth: 16,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [800, 800, 800, 800, 800, 800, 800, 800]
            },
            {
                name: "값4",
                type: "bar",
                barWidth: 16,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [1650, 1650, 1650, 1650, 1650, 1650, 1650, 1650]
            },

            
            {
                name: "고점 연결",
                type: 'line',
                symbol: 'circle',
                symbolSize: 7,
                lineStyle: {
                    color: '#e37eff', // 선 색상
                    width: 2, // 선 두께
                    type: 'solid', // 선 스타일
                },

                // 각 지역의 평균값 계산
                // data: [
                //     (520 + 1050 + 800 + 1650) / 4, // 수도권
                //     (520 + 1050 + 800 + 1650) / 4, // 강원
                //     (520 + 1050 + 800 + 1650) / 4, // 충북
                //     (520 + 1050 + 800 + 1650) / 4, // 전남
                //     (520 + 1050 + 800 + 1650) / 4, // 경북
                //     (520 + 1050 + 800 + 1650) / 4, // 경남
                //     (520 + 1050 + 800 + 1650) / 4, // 충남
                //     (520 + 1050 + 800 + 1650) / 4, // 전북
                // ],

                // 각 지역의 고점
                // data: [
                //     Math.max(520, 1050, 800, 1650), // 수도권
                //     Math.max(520, 1050, 800, 1650), // 강원
                //     Math.max(520, 1050, 800, 1650), // 충북
                //     Math.max(520, 1050, 800, 1650), // 전남
                //     Math.max(520, 1050, 800, 1650), // 경북
                //     Math.max(520, 1050, 800, 1650), // 경남
                //     Math.max(520, 1050, 800, 1650), // 충남
                //     Math.max(520, 1050, 800, 1650), // 전북
                // ]
            }
        ]
    },
    barStack: {
        color: ["#d655a6", "#21ced3", "#e9ec20", "#2561e2"].reverse(),
        title: {
            show: false,
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textStyle: {
                color: '#ffffff',
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
        },
        legend: {
            itemWidth: 12, // 아이템 너비
            itemHeight: 4, // 아이템 높이
            data: ['소통정보 수집', '소통정보 융합', '소통정보 저장', '소통지도 생성'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            right: '0%',
            top: '0%', // 범례를 제목 아래로
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '3%',
            containLabel: true,
            top: '10%', // 그래프 영역을 아래로 이동
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['2024.10.19.\n18:00', '2024.10.19.\n18:05', '2024.10.19.\n18:10', '2024.10.19.\n18:15', '2024.10.19.\n18:20', '2024.10.19.\n18:25', '2024.10.19.\n18:30', '2024.10.19.\n18:35', '2024.10.19.\n18:40', '2024.10.19.\n18:45', '2024.10.19.\n18:50', '2024.10.19.\n18:55'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 10,
                    fontWeight: 400,
                    fontFamily: 'Pretendard',
                    color: '#bfd7fe',
                    lineHeight: 12,
                },
                interval: 0,
            },
            axisTick: {
                show: false // x축의 작은 세로선 숨기기
            }
        },
        yAxis: {
            type: 'value',
            position: 'left',
            alignTicks: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                }
            },
            min: 0,
            max: 140,
            interval: 10,
            name: '(초)',  // y축 상단에 표시할 텍스트
            nameLocation: 'end',  // 텍스트를 y축 상단에 배치
            nameTextStyle: {
                fontSize: 12,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
                padding: [0, 30, 0, 0],  // 왼쪽으로 밀기 위해 padding 추가
            }
        },
        series: [
            {
                name: "소통지도 생성",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [28, 3, 25, 28, 28, 4, 28, 2, 28, 4, 28, 46]
            },
            {
                name: "소통정보 저장",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [10, 10, 15, 10, 20, 10, 10, 10, 10, 10, 10, 10]
            },
            {
                name: "소통정보 융합",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [15, 10, 25, 15, 15, 15, 60, 18, 18, 7, 18, 8]
            },
            {
                name: "소통정보 수집",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [5, 5, 50, 8, 28, 8, 3, 9, 12, 18, 8, 7]
            },
        ],
    },
}