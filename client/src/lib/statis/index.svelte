<script>
  import { onMount } from 'svelte';
  import { fetchGet } from '../../utils/fetch.js';
  import Pagination from '../../components/pagination/BePagination.svelte';
  import { message } from '../../components/message/showNotice.js';
  import { loading } from '../../utils/useLoading.js';
  import { WTable } from '../../components/w_component/index.js';
  import * as echarts from 'echarts';

  let isLoading = false;
  let tableData = [];
  let countryEl;
  let provinceEl;
  let cityEl;
  let ispEl;
  let column = [
    { key: 'ip', title: 'IP', width: '20%' },
    { key: 'country', title: '国家', width: '15%' },
    { key: 'province', title: '省份', width: '15%' },
    { key: 'city', title: '市', width: '20%' },
    { key: 'isp', title: '运营商', width: '15%' },
    { key: 'access_time', title: '访问时间'},
  ];
  let page = {
    count: 0,
    offset: 1,
    limit: 15,
  };
  let base_url = import.meta.env.VITE_APP_BASE_URL;
  onMount(() => {
    getStatisList()
    getStatisData('country');
    getStatisData('province');
    getStatisData('city');
    getStatisData('isp');
  });
  // 统计图数据
  const getStatisData = async (column_key) => {
    isLoading = true;
    try {
      let { code, data, msg } = await fetchGet('/api/statis/access_statis', { column_key });
      isLoading = false;
      if (code === 200) {
        if (column_key === 'country' || column_key === 'isp') {
          getCountryOp(data,column_key);
        }
        if (column_key === 'province' || column_key === 'city') {
          getProvinceOp(data, column_key);
        }
      } else {
        message.warning(msg);
      }
    } catch (e) {
      isLoading = false;
      message.error();
    }
  };

  // 国家,运营商饼图统计
  function getCountryOp(data,column_key) {
    let list = data[0].map((x, i) => {
      return { value: data[1][i], name: x };
    });
    const option = {
      title: {
        text: column_key === 'isp' ? '运营商统计' : '国家统计',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      }, 
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data: list,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    echarts.init(column_key === 'isp' ? ispEl : countryEl ).setOption(option);
  }

  // 省,市柱状图统计
  function getProvinceOp(data, column_key) {
    const option = {
      title: {
        text: column_key === 'city' ? '市级统计' : '省级统计',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: data[0].map(x => {
            return (x === '' || x == null) ? '未知' : x;
          }),
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          type: 'bar',
          barWidth: '60%',
          data: data[1],
        },
      ],
    };
    echarts.init(column_key === 'city' ? cityEl : provinceEl).setOption(option);
  }
  // 访问列表
  const getStatisList = async () => {
    isLoading = true;
    try {
      let { code, data, msg } = await fetchGet('/api/statis/record_list', page);
      isLoading = false;
      if (code === 200) {
        tableData = data.rows;
        page.count = data.count;
      } else {
        message.warning(msg);
      }
    } catch (e) {
      isLoading = false;
      message.error();
    }
  }; 
  // 分页改变
  const changePage = (data) => {
    page.offset = data.detail;
    getStatisList()
  };
</script>

<main>
  <div class="statis_echarts">
    <div class="echarts_content" bind:this={countryEl}></div>
    <div class="echarts_content" bind:this={provinceEl}></div>
    <div class="echarts_content" bind:this={cityEl}></div>
    <div class="echarts_content" bind:this={ispEl}></div>
  </div>
  <div class="load_auto load_auto_s" use:loading={isLoading}>
    <WTable data={tableData} column={column}>
      <div slot="cell_1" let:prop={row}>
        <span>{row.country || "未知"}</span>
      </div>
      <div slot="cell_2" let:prop={row}>
        <span>{row.province || "未知"}</span>
      </div>
      <div slot="cell_3" let:prop={row}>
        <span>{row.city || "未知"}</span>
      </div>
      <div slot="cell_4" let:prop={row}>
        <span>{row.isp || "未知"}</span>
      </div>
      <div slot="cell_5" let:prop={row}>
        <span>{row.access_time}</span>
      </div>
    </WTable>
    <Pagination page={page} {changePage} />
  </div>
</main>
<style lang="less">
  .statis_echarts {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .echarts_content {
      width: 300px;
      height: 300px;
    }
  }

  main {
    width: 98%;
    margin: 0 auto;
    padding: 20px 0;
  }


</style>
