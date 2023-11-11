const Chart = () => {
  return (
    <div>
      <h1 className='text-secondary'>Chart </h1>
      <img
        src='https://image-charts.com/chart?cht=lc&chs=400x300&chd=t:10,20,30|20,30,40&chxt=x,y&chxl=0:|Jan|Feb|Mar&chxr=1,0,40'
        alt='chart'
      />
    </div>
  );
};
export default Chart;
