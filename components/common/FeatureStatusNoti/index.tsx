import {HTMLAttributes} from "react";
import Noti from "@/components/common/Noti";
import Link from "next/link";

interface IFeatureStatusNoti extends HTMLAttributes<HTMLDivElement> {
    featureStatus: FeatureStatus;
}

export default function FeatureStatusNoti({featureStatus}: IFeatureStatusNoti) {
    return (
        Object.values(featureStatus).includes(true) && (
            <section className={"flex flex-col gap-[24px] w-full leading-normal section"}>
                {featureStatus.deprecated && (
                    <Noti type={"deprecated"}>
                        <p>이 feature는 지원중단되었습니다. 표준에서 삭제되었으며, 앱 내에서 하위 호환성 목적 유지할 수 있지만 축소되거나 삭제될 수 있습니다. 그러므로 사용을 피하고 다른 코드로 대체하기를 권장합니다. <Link href={"#앱-호환성"}>앱 호환성 표</Link>에서 자세한 지원 현황과 구현 내역을 확인하세요.</p>
                    </Noti>
                )}
                {featureStatus.experimental && (
                    <Noti type={"experimental"}>
                        <p>이 feature는 실험적입니다. 안정성이 보장되지 않았으므로 사용에 주의하세요.</p>
                    </Noti>
                )}
                {featureStatus.nonStandard && (
                    <Noti type={"nonStandard"}>
                        <p>이 feature는 비표준입니다. 동작의 구현이 변경될 수 있으며, 다른 앱에서 동작하지 않거나 다르게 동작할 수 있습니다. <Link href={"#앱-호환성"}>앱 호환성 표</Link>에서 자세한 지원 현황과 구현 내역을 확인하세요.</p>
                    </Noti>
                )}
            </section>
        )
    );
}