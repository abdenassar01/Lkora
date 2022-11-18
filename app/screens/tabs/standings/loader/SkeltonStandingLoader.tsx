import SkeletonPlaceholder from "react-native-skeleton-placeholder";


export default function SkeltonStandingLoader() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item alignItems="center">
          <SkeletonPlaceholder.Item width={ 200 } height={ 40 } marginVertical={ 10 } borderRadius={ 50 } />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection="row">
          <SkeletonPlaceholder.Item width={ 130 } height={ 35 } margin={ 5 } borderRadius={ 50 } />
          <SkeletonPlaceholder.Item width={ 130 } height={ 35 } margin={ 5 } borderRadius={ 50 } />
          <SkeletonPlaceholder.Item width={ 130 } height={ 35 } margin={ 5 } borderRadius={ 50 } />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item marginTop={ 20 } alignItems="center">
          <SkeletonPlaceholder.Item width="95%" height={ 100 } borderRadius={ 10 } />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item marginTop={ 20 } alignItems="center">
          <SkeletonPlaceholder.Item width="95%" height={ 400 } borderRadius={ 10 } />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}{}