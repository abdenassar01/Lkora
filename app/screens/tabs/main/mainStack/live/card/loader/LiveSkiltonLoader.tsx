import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { withTheme } from 'styled-components';

function LiveSkiltonLoader(props: any) {
  return (
    <SkeletonPlaceholder borderRadius={ 10 } backgroundColor={ props.theme.text } highlightColor={ props.theme.helperText } >
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" >
        <SkeletonPlaceholder.Item width={250} height={170} borderRadius={10} marginRight={ 10 } marginLeft={ 5 } />
        <SkeletonPlaceholder.Item  width={250} height={170} borderRadius={10}/>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}

export default withTheme(LiveSkiltonLoader)