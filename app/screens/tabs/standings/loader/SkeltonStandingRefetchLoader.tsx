import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { withTheme } from "styled-components";

function SkeltonStandingRefetchLoader({ theme }: any) {
  return (
    <SkeletonPlaceholder backgroundColor={ theme.text } highlightColor={ theme.helperText }>
        <SkeletonPlaceholder.Item marginTop={ 20 } alignItems="center">
          <SkeletonPlaceholder.Item width="95%" height={ 40 } borderRadius={ 10 } margin={ 5 } />
          <SkeletonPlaceholder.Item width="95%" height={ 300 } borderRadius={ 10 } />
        </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}

export default withTheme(SkeltonStandingRefetchLoader)