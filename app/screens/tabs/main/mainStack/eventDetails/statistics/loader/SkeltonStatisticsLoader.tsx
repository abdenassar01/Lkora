import SkeletonPlaceholder from "react-native-skeleton-placeholder";

function SkeltonStatisticsLoader() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item alignItems="center" marginTop={ 20 }>
        <SkeletonPlaceholder.Item width="95%" height={ 40 } margin={ 5 } borderRadius={ 50 } />
        <SkeletonPlaceholder.Item width="95%" height={ 40 } margin={ 5 } borderRadius={ 50 } />
        <SkeletonPlaceholder.Item width="95%" height={ 40 } margin={ 5 } borderRadius={ 50 } />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}

export default SkeltonStatisticsLoader