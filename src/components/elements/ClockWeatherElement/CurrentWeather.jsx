import useWeater from "@/hooks/useWeather";

export default function CurrentWeather() {
  const { data } = useWeater();

  const convertUTCdate = unix_timestamp => {
    var date = new Date(unix_timestamp * 1000);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const Divider = () => (
    <div className="w-px min-h-full border-t-4 border-b-4 border-gray-400" />
  );

  const Cell = ({ title, content }) => (
    <div className="p-2">
      <h5 className="text-gray-500">{title}</h5>
      <span>{content}</span>
    </div>
  );

  return data?.current ? (
    <div className="flex justify-between grid-cols-6 text-xs tracking-wide uppercase align-middle border-t border-b border-gray-400">
      <Divider />
      <Cell content={data?.current.weather[0].main} title="Weather" />
      <Divider />
      <Cell
        content={Math.round(data?.current.temp * 10) / 10}
        title="Temperature"
      />
      <Divider />
      <Cell
        content={Math.round(data?.daily[0].temp.max * 10) / 10}
        title="Daily max"
      />
      <Divider />
      <Cell
        content={Math.round(data?.daily[0].temp.min * 10) / 10}
        title="Daily min"
      />
      <Divider />
      <Cell content={convertUTCdate(data?.current.sunrise)} title="Sunrise" />
      <Divider />
      <Cell content={convertUTCdate(data?.current.sunset)} title="Sunset" />
      <Divider />
    </div>
  ) : (
    <div />
  );
}
