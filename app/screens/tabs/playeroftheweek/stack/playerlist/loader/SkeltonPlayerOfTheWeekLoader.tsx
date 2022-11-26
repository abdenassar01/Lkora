import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { withTheme } from 'styled-components'

function SkeltonPlayerOfTheWeekLoader(props: any) {
  return (
    <SkeletonPlaceholder backgroundColor={ props.theme.text } highlightColor={ props.theme.helperText }> 
        <SkeletonPlaceholder.Item>
            {
                [...Array(5)].map(ele => (
                    <SkeletonPlaceholder.Item key={ Math.random() } flexDirection='row' alignItems='center' justifyContent='space-between' paddingHorizontal={ 10 }>
                        <SkeletonPlaceholder.Item flexDirection='row' alignItems='center' justifyContent='center'>
                            <SkeletonPlaceholder.Item width={ 40 } height={ 40 } borderRadius={ 50 } margin={ 5 } />
                            <SkeletonPlaceholder.Item width={ 100 } height={ 20 } borderRadius={ 50 } margin={ 5 } />
                        </SkeletonPlaceholder.Item>
                        <SkeletonPlaceholder.Item flexDirection='row' alignItems='center' justifyContent='center'>
                            <SkeletonPlaceholder.Item width={ 100 } height={ 20 } borderRadius={ 50 } margin={ 5 } />
                            <SkeletonPlaceholder.Item width={ 40 } height={ 40 } borderRadius={ 50 } margin={ 5 } />
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                ))
            }
        </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}

export default withTheme(SkeltonPlayerOfTheWeekLoader)