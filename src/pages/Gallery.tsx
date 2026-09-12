import { Camera } from 'lucide-react';
import hillsboroughVideo from '../assets/LuceQuintet Interstellar @ HillsboroughLib.mp4';
import montgomerySeniorVideo from '../assets/GodfatherThemeperformedbytheLuceQuintet Montgomery Senior Center - Luce Quintet (1080p, h264).mp4';
import quailBrookVideo from '../assets/Eleanor Rigby@QuailBrookSeniorCentert.mov';
import montgomeryLibraryPhoto from '../assets/GroupPhotoMontgomeryLibrary.jpg';
import montgomeryHighSchoolPhoto from '../assets/GrroupPhotoMontgomeryHighSchool.JPG';


type MediaItem = {
  title: string;
  description: string;
} & ({ type: 'video'; src: string } | { type: 'image'; src: string });

const Gallery = () => {
  const galleryItems: MediaItem[] = [
    {
      type: 'video',
      src: hillsboroughVideo,
      title: 'Hillsborough Library',
      description: 'Interstellar theme performed live',
    },
    {
      type: 'image',
      src: montgomeryLibraryPhoto,
      title: 'West Windsor Library',
      description: 'In My Life performed live',
    },
    {
      type: 'video',
      src: montgomerySeniorVideo,
      title: 'Montgomery Senior Center',
      description: 'Godfather theme performed live',
    },
    {
      type: 'video',
      src: quailBrookVideo,
      title: 'Quail Brook Senior Center',
      description: 'Eleanor Rigby performed live',
    },
    {
      type: 'image',
      src: montgomeryLibraryPhoto,
      title: 'Montgomery Library',
      description: 'Performance at Montgomery Library',
    },
    {
      type: 'image',
      src: montgomeryHighSchoolPhoto,
      title: 'Montgomery High School',
      description: 'Performance at Montgomery High School',
    },
  ];

  return (
    <div className="relative min-h-screen bg-white pt-20 pb-12">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Media Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capturing moments of musical excellence and community connection through our performances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden bg-black">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      controls
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200 text-center">
            <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-black mb-4">More Media Coming Soon</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              We're constantly capturing new moments from our performances and community events.
              Check back regularly to see our latest photos and videos of The Luce Quintet in action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Gallery;
