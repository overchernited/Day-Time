import AttachCard from "../../../Components/AttachCard";

const Feed = () => {
  return (
    <div className="flex flex-row gap-4 flex-wrap w-[60%] justify-center items-center m-auto">
      <AttachCard
        height="100%"
        width="35%"
        postString="Holaaaaaaaaaaaaaaaaaaaa ASDJASKDJKASJDASKLDJKASD SDJAKSJDKASJDKAJSDSAD"
        icon="fa-brands fa-youtube"
        imgSrc="https://i.ytimg.com/vi/Aih3R7a843w/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAIRoTpUjxSTHvSqv_DzCYbXlEOqQ"
      />
      <AttachCard
        height="max-content"
        width="35%"
        postString="Post"
        imgSrc="https://i.ytimg.com/vi/Aih3R7a843w/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAIRoTpUjxSTHvSqv_DzCYbXlEOqQ"
      />
      <AttachCard
        height="15%"
        width="35%"
        postString="Post"
        imgSrc="https://i.ytimg.com/vi/Aih3R7a843w/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAIRoTpUjxSTHvSqv_DzCYbXlEOqQ"
      />
      <AttachCard
        height="15%"
        width="35%"
        postString="Post"
        imgSrc="https://i.ytimg.com/vi/Aih3R7a843w/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAIRoTpUjxSTHvSqv_DzCYbXlEOqQ"
      />
    </div>
  );
};

export default Feed;
