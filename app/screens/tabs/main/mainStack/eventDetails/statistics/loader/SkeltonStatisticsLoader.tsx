import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { withTheme } from "styled-components";

function SkeltonStatisticsLoader(props: any) {
  return (
    <SkeletonPlaceholder backgroundColor={ props.theme.background } highlightColor={ props.theme.helperText }>
      <SkeletonPlaceholder.Item alignItems="center" marginTop={ 20 }>
        <SkeletonPlaceholder.Item width="95%" height={ 40 } margin={ 5 } borderRadius={ 50 } />
        <SkeletonPlaceholder.Item width="95%" height={ 40 } margin={ 5 } borderRadius={ 50 } />
        <SkeletonPlaceholder.Item width="95%" height={ 40 } margin={ 5 } borderRadius={ 50 } />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}

export default withTheme(SkeltonStatisticsLoader)