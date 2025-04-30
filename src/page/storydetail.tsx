import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StoryDetail = () => {
  const { documentId } = useParams(); // Get documentId from URL

  interface Story {
    title: string;
    content: string;
    audio?: { url: string };
    cover_image?: { url: string };
  }

  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await axios.get(
          `http://62.72.46.248:1337/api/stories/${documentId}?populate=*`
        );
        setStory(res.data.data || null); // Use attributes if needed
      } catch (error) {
        console.error("Error fetching story:", error);
        setError("Failed to fetch story. Please try again later.");
        setStory(null);
      } finally {
        setLoading(false);
      }
    };

    if (documentId) {
      fetchStory();
    } else {
      setError("Story not found.");
      setLoading(false);
    }
  }, [documentId]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }

  if (!story) {
    return (
      <div className="text-center mt-10 text-red-600">Story not found.</div>
    );
  }

  return (
    <div className="p-4 max-w-4xl mx-auto items-center">
      <div className="border-t border-gray-400 w-full mx-auto font-bold text-2xl">
        <h2 className="mx-4 text-4xl font-bold text-center">{story.title}</h2>
      </div>

      <div className="flex flex-col items-center my-4">
        {story.cover_image?.url && (
          <div className="w-96">
            <img
              className="w-full"
              src={story.cover_image.url}
              alt={story.title}
            />
          </div>
        )}

        {/* Conditionally render the audio player */}
        {story.audio?.url ? (
          <div className="mt-4">
            <audio className="w-96" controls>
              <source src={story.audio.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ) : (
          <div className="mt-4 text-gray-600">
            No audio available for this story.
          </div>
        )}
      </div>

      <div
        className="prose prose-lg text-center"
        dangerouslySetInnerHTML={{ __html: story.content }}
      />
    </div>
  );
};

export default StoryDetail;
