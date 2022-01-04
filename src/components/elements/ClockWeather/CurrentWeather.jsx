import useWeater from "@/hooks/fetching/useWeather";

export default function CurrentWeather() {
  const { data } = useWeater();

  const convertUTCdate = unix_timestamp => {
    const date = new Date(unix_timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const Divider = () => (
    <div className="w-px min-h-full border-t-4 border-b-4 border-gray-400" />
  );

  const Cell = ({ title, content }) => (
    <div className="p-2">
      <h5 className="text-gray-500">{title}</h5>
      <p>{content}</p>
    </div>
  );

  if (!data) return null;

  return (
    <div className="flex justify-between grid-cols-6 text-xs tracking-wide uppercase align-middle border-t border-b border-gray-400">
      <Divider />
      <Cell title="Weather" content={data?.current.weather[0].main} />
      <Divider />
      <Cell
        title="Temperature"
        content={Math.round(data?.current.temp * 10) / 10 + "°C"}
      />
      <Divider />
      <Cell
        title="Daily max"
        content={Math.round(data?.daily[0].temp.max * 10) / 10 + "°C"}
      />
      <Divider />
      <Cell
        title="Daily min"
        content={Math.round(data?.daily[0].temp.min * 10) / 10 + "°C"}
      />
      <Divider />
      <Cell title="Sunrise" content={convertUTCdate(data?.current.sunrise)} />
      <Divider />
      <Cell title="Sunset" content={convertUTCdate(data?.current.sunset)} />
      <Divider />
      <Cell title="UV-Index" content={data.current.uvi} />
      <Divider />
      <Cell title="Clouds" content={data.current.clouds + " %"} />
      <Divider />
    </div>
  );
}
