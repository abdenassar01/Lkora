import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { withTheme } from "styled-components";

function SkeltonStandingTopLoader({ theme }: any) {
	return (
		<SkeletonPlaceholder
			backgroundColor={theme.text}
			highlightColor={theme.helperText}>
			<SkeletonPlaceholder.Item>
				<SkeletonPlaceholder.Item alignItems="center">
					<SkeletonPlaceholder.Item
						width={200}
						height={40}
						marginVertical={10}
						borderRadius={50}
					/>
				</SkeletonPlaceholder.Item>
				<SkeletonPlaceholder.Item flexDirection="row">
					<SkeletonPlaceholder.Item
						width={130}
						height={35}
						margin={5}
						borderRadius={50}
					/>
					<SkeletonPlaceholder.Item
						width={130}
						height={35}
						margin={5}
						borderRadius={50}
					/>
					<SkeletonPlaceholder.Item
						width={130}
						height={35}
						margin={5}
						borderRadius={50}
					/>
				</SkeletonPlaceholder.Item>
			</SkeletonPlaceholder.Item>
		</SkeletonPlaceholder>
	);
}

export default withTheme(SkeltonStandingTopLoader);
