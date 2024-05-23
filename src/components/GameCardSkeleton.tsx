import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Skeleton height={"300px"}>
        <SkeletonText noOfLines={3}/>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
