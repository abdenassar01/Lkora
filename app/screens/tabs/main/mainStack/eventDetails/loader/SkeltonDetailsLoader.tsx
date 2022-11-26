import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { withTheme } from "styled-components";

function SkeltonDetailsLoader(props: any) {
  
  return (
    <SkeletonPlaceholder backgroundColor={ props.theme.text } highlightColor={ props.theme.helperText }>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection="row" marginLeft="3%" padding={ 30 } alignItems="center" justifyContent="space-between" width="90%">
          <SkeletonPlaceholder.Item alignItems="center">
              <SkeletonPlaceholder.Item width={ 70 } height={ 15 } marginBottom={ 5 } borderRadius={ 50 }/>
              <SkeletonPlaceholder.Item width={ 60 } height={ 60 } borderRadius={ 50 }/>
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width={ 100 } height={ 30 } borderRadius={ 50 }/>
          <SkeletonPlaceholder.Item alignItems="center">
              <SkeletonPlaceholder.Item width={ 70 } height={ 15 } marginBottom={ 5 } borderRadius={ 50 }/>
              <SkeletonPlaceholder.Item width={ 60 } height={ 60 } borderRadius={ 50 }/>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}

export default withTheme(SkeltonDetailsLoader)