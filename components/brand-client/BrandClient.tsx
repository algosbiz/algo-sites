import { dsnCN } from "../../hooks/helper";
import DsnGrid, { DsnGridProps } from "../../layout/DsnGrid";
import Image from "next/image";
import Button from "../button/Button";
import { getBrands } from "../../data/brand-clients";


function BrandClient({ className, data=null, ...restProps }: DsnGridProps) {
    const dataShow = data || getBrands();
  return (
    <DsnGrid
      className={dsnCN(" brand-client wrapper-client", className)}
      {...restProps}
    >
      {dataShow &&
        dataShow.map(($item, $index) => (
          <div className="group logo-box relative " key={$index}>
            <div className="logo-box-inner p-relative">
              <Image src={$item?.src} alt={""} width={180} height={54} />
            </div>
            {$item.link && (
              <div className="overlay absolute top-0 bg-black p-4 w-full h-full -left-full opacity-0 group-hover:left-0 flex group-hover:opacity-100 group-hover:w-full justify-center items-center transition-all duration-500">
                <Button
                  className=""
                  href={$item?.link.href || "#"}
                  borderStyle={"border-color-theme-color"}
                  target="_blank"
                  rel="nofollow"
                >
                  {$item?.link.label}
                </Button>
              </div>
            )}
          </div>
        ))}
    </DsnGrid>
  );
}

export default BrandClient;
