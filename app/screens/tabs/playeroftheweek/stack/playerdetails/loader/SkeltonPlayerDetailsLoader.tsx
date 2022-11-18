import SkeletonPlaceholder from "react-native-skeleton-placeholder";

export default function SkeltonPlayerDetailsLoader() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection="row" paddingHorizontal={ 20 } alignItems='center'>
            <SkeletonPlaceholder.Item width={ 100 } height={ 100 } borderRadius={ 50 }  />
            <SkeletonPlaceholder.Item justifyContent="center" height={ 100 } marginLeft={ 10 }>
                <SkeletonPlaceholder.Item width={ 200 } height={ 15 } borderRadius={ 50 } marginVertical={ 3 } />
                <SkeletonPlaceholder.Item width={ 150 } height={ 15 } borderRadius={ 50 } marginVertical={ 3 } />
                <SkeletonPlaceholder.Item width={ 100 } height={ 15 } borderRadius={ 50 } marginVertical={ 3 } />
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item alignItems='center'>
            <SkeletonPlaceholder.Item width="30%" height={ 40 } borderRadius={ 50 } marginTop={ 20 } marginBottom={ 10 } />
            {
                [...Array(8)].map(el => 
                    <SkeletonPlaceholder.Item
                        key={ Math.random() } 
                        width="95%" 
                        height={ 40 } 
                        borderRadius={ 50 } 
                        marginVertical={ 5 } 
                    /> 
                )
            }
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  )
}