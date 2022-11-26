import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { withTheme } from 'styled-components';

function ScheduledSkiltonLoader(props: any) {
  return (
    <SkeletonPlaceholder backgroundColor={ props.theme.text } highlightColor={ props.theme.helperText }>
        <SkeletonPlaceholder.Item justifyContent='center' alignItems='center' >
            <SkeletonPlaceholder.Item borderRadius={ 10 } width="95%" height={ 70 } marginBottom={ 10 } />
            <SkeletonPlaceholder.Item borderRadius={ 10 } width="95%" height={ 70 } marginBottom={ 10 } />
            <SkeletonPlaceholder.Item borderRadius={ 10 } width="95%" height={ 70 } marginBottom={ 10 } />
            <SkeletonPlaceholder.Item borderRadius={ 10 } width="95%" height={ 70 } marginBottom={ 10 } />
        </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}

export default withTheme(ScheduledSkiltonLoader);