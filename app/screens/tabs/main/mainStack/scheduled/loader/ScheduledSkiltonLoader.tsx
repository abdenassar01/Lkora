import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default function ScheduledSkiltonLoader() {
  return (
    <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item justifyContent='center' alignItems='center'>
            <SkeletonPlaceholder.Item borderRadius={ 10 } width="95%" height={ 70 } marginBottom={ 10 } />
            <SkeletonPlaceholder.Item borderRadius={ 10 } width="95%" height={ 70 } />
        </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}