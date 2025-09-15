const SparkleAnimation = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
      <div className="absolute top-3 right-2 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '1.5s' }}></div>
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '2s' }}></div>
      <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '1.5s' }}></div>
      <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-white rounded-full animate-ping" style={{ animationDelay: '0.8s', animationDuration: '1.8s' }}></div>
    </div>
  )
}

export default SparkleAnimation