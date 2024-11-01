import bannerImg from '../../assets/images/user.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bannerImg}
      className="max-w-xl rounded-lg h-[744px] object-cover" />
    <div>
      <h1 className="text-5xl text-white font-bold">One Step Closer To Your <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Dream Job</span> </h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;