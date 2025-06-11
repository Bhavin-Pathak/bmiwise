const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-bounce"></div>
    </div>
  );
};

export default Background;
