import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id='right' className="h-full flex flex-nowrap overflow-x-auto gap-10 w-2/3 p-6">
      {props.users.map(function (user, idx) {
        return <RightCard key={idx} id={idx} color={user.color} img={user.img} tag={user.tag} />;
      })}
    </div>
  );
};

export default RightContent;
