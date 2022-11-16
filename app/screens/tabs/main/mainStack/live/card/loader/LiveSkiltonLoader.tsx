import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function LiveSkiltonLoader() {
  return (
    <SkeletonPlaceholder borderRadius={ 10 } >
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" >
        <SkeletonPlaceholder.Item width={250} height={170} borderRadius={10} marginRight={ 10 } marginLeft={ 5 } />
        <SkeletonPlaceholder.Item  width={250} height={170} borderRadius={10}/>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}