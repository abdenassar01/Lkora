import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export default function SkeltonBotolaLoader() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item alignItems="center" marginTop={ 20 }>
        <SkeletonPlaceholder.Item width={ 200 } height={ 30 } borderRadius={ 50 } marginVertical={ 10 } />
        <SkeletonPlaceholder.Item width={ 150 } height={ 150 } borderRadius={ 75 } />
        <SkeletonPlaceholder.Item width={ 100 } height={ 30 } borderRadius={ 50 } marginVertical={ 10 } />
        <SkeletonPlaceholder.Item width="90%" height={ 60 } borderRadius={ 10 } marginVertical={ 10 } />
        <SkeletonPlaceholder.Item width="90%" height={ 60 } borderRadius={ 10 } marginVertical={ 10 } />
        <SkeletonPlaceholder.Item width={ 100 } height={ 30 } borderRadius={ 50 } marginVertical={ 10 } />
        <SkeletonPlaceholder.Item flexDirection="row">
            <SkeletonPlaceholder.Item width={ 150 } height={ 200 } borderRadius={ 10 } marginRight={ 20 } />
            <SkeletonPlaceholder.Item width={ 150 } height={ 200 } borderRadius={ 10 } />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}