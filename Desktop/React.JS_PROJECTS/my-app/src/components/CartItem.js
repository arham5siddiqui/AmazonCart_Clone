import React from 'react'
import './CartItem.css'

function CartItem() {
    return (
        <div className="CartItem">
            <div className="CartItem-image"> 
                <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhUUFRIREhIZEhISFBUSEhEREhgYGBYaGhgUGBgcIS4lHCErHxgYJkYmKy8xQzU1GjE7QDs0Py40NT8BDAwMEA8QHxISHjEjIyQ0NjY0NDQ2NDQ4NDQ0NDQ2MTQ0MTQ0MTQ/NjQ0NDQ0NDQxNDYxNDQ0NDQ0NzU0NDQ0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcCAwj/xABGEAACAQICBQUKDQIGAwAAAAAAAQIDEQQhBQYSMUEyUWFxsgcTIjRSdIGRscEUIyQzQmJyc4KSocLws9EVU4Oi4fElY2T/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQYCAwUE/8QAMhEBAAEDAQQIBQQDAQAAAAAAAAECAxExBAUSITIzQWFxocHwUXKBwtETIpGxYuHxFP/aAAwDAQACEQMRAD8AggAXxWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEr5LN7klm+o6NqjqdsWr4mN6mUoUpZqHNKa4y6OHXu8+07Tb2ejir+kds++2ezybbNmq7Vw0/8R+q2pTqpVsSpKm840k3Gclzze+K6Fm+jj9NbtWKNNKVGPe3syeym2nsratn0X9R0gg9YJpd7TjGSlOUXdZrwHmnwZWbm8b9V39TixjsjTHwx2/V2adltRRwY+va4yDCMlvmMThwYAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAHqnTlOSjGLlKTUYxim5NvckuJ6wuHnVlGEIylOTtGMc23/ADjwOr6q6rwwcVOdp4hrOXCKe+Ef78Tx7ZtlGzU5nnM6R77G+xs9V6cRyjtlq6o6oxwyVWslKvvSycaf95dPDhzlyAKpev13q+Oucz75Q7lu3Tbp4aWGVrWyVvg7z+fisrvemuBZWQGsTs6H3jXrizTOjZGrjgMGS/1dKVXjQABikAAAAAAAAAAAAAAAAAAH3wOG77UhC9tqSTfMuL9Vz5d0XFSw0MPQouVGMqffp7LcJycpSSU2s2lGMfTJkjq5K2LpNb05tdexKxD91qcpTwspNuTw0G29+9ld31XV+pTRnljP1zP4dXd1McNVXbnCuaO1glG0at5x8tcv0+UWSjWjOKlGSlF7mjniNrBY2pRltQbW663p9DRq2Tely1+25+6nzj69v1/nsbL+xUV86P2z5e/BfQRmjNMQrWi/AqeS3k/svj1E9omgqmJo05K8ZVqcJLnTmk16mWK3ft3KP1KJzHv3iebk1W6qauCqMSuOp+Iw+FxEMM4SqYypTUqk8tmmmlPvWed1FqT6cuGXQad3ZtbLtybp2fG7WRQdW9VsVDSeIxVZx2HVxPe7Xu41Km0m7pWbSisr2SfOjohTL12q9XNyrWfePCNFgooiinhp0gABrZsFd1neeH6ayX6MsRXdZYpvD3/zk1ZuOdnbd7CJ0TGrjy3GTBkv1XSlV40AAQkAAAAAAAAAAAAAAAAAAG/oOLeJppWv4dr5LkSIvup8vB+bR95L6veNQ/H/AE5kR3UeXg/Noe8re+uvp+X7qnX3f1c+PpChShfrPM4Sg7PL2M2sNC8lzLN+gk8FhlUbcknF77nJiMvdM4QC6MmXHUfTc1jsLTneaeJoRUvpr4yO/oK//hc5qc6UW6cZNJN+E10c599UstI4S+TWLoX5+WjO1duWpzROM+bGqimuMVQ/V0JqSundHshNHYhpLMmITTNTN7AAGCuazzSlhru166WeW9OxYyA1h5VH7cuwyJ0TGrjZkwtxkv1XSlV40AAQkAAAAAAAAAAAAAAAAAAEjoB2xMN+6puTb+bnuS3kR3TeVgvNYe8mNXPGof6v9ORE90/l4PzWHvK1vrr6fl+6p2N39XPj6Qp+Hj4MnztRXtfuJecJKEKUOXUyb5ofSl7jR0fT2pQXDOT9f/BYdFU4vbxM2o0+RFu7tCPMuLbvuObS9ctmnhlThGEcopfxnrRWj6c8ZhpOPhxxNF7Ucr2nHKXOQ2ktYJSlsUYKm/KnaU0ueXCL6M7c/A96s4uq8dg1KrUkpYuhvnJbS24/R3KPtE8yOTulC6JPD1TQoS5zdjTtmjWzSEJ3PZHfCoxnCDdpz2tiPFqKvJ9Syz6Vzm9GRA9EBrDyqP25dhk+QGsXKo/eS7DInRMONrcZMGS/VdKVXjQABCQAAAAAAAAAAAAAAAAAASOr6bxMErJtVEr5r5uZE901Wngl/wDLD3kxq343T66nYkRPdP8AnMH5tH9xW989fT8v3VOvu/q58fSFe0XRlUahDlzcacehPlS9CTZPayyVKnGEMlC0Irptv9Cz67HjUWgtqpiJcmEdiH255t+iKX5jR09V75XjDhFbUut5v9qObEcsfF6+1F0aKhG7SbednudvKfkrjzt24Ehq0raRwe025PF4d2+ly4+FLyV9X1mnOpd5WvlZ71Hml0vfZdcuOW3qvG2kMHnb5Zh3a9233yOcnxfQbLkxEYj37988kO/UkSGHeWe72GhRM6Tclhq+zyu81Nm3PsM87NS8drI8VpKjQw7nQlCtCjOq9hylSclOSpqz2VLYSvveyt2d+mxRxX/BJ4nF4WVJTtUlGnVnT2k4Rg9vb2lybJSs+do7ckTXGJRTzZRX9Y34VH7yXYZYLFe1kfhUPty7DNc6M41cdMgF/q6UqvGgADFIAAAAAAAAAAAAAAAAAAJPVzxqn11OxIiO6fy8H5tH9xLaueNU+up2GRPdP5eD82j+4rW+uvp+X7qnX3f1c+PpDOipKjgIXyc5zqS6VtbMf9sUVyrW2nOf0pyt1R4+slNKVHGlRp+TRpx9Oyr+8hMPBzmorLi35Mb7/wCc5zc84iHshl5K7ulf9X7W/wCbja1VlfSOCfPjMO/98bIj8dW25bMF4MFsRS4yfKk/Z6De1TglpHBXzl8Lw/UvDiYVMofoakb1M0aBvUiEvto/A0qFPYpRUIXcrJt5t3ebz/4RtxPNJ5HpAZK5rO/Cofbl2GWMrOtTtKh95LsMxnRMauRGTBkv9XSlV40AAYpAAAAAAAAAAAAAAAAAABJau+NU+ufYZEd0/l4PzaP7iW1e8Zp9c+wyJ7p3Lwfm0f3Fa3119Py/dU7G7+rnx9IROlZ/GdEYJ+pEdCTpwk/puy9LyS9GbNzFy2pt7936JO3rsvSfDEQs4x8mO3L7Uv7K/wCY5mcc3s7mnGnsRtvk+bN35kWjVLQ6p4zC1KztP4TQ2YX5Lc422ueXR7SOjKGFiqs1tVZL4uD+j9Z8z9nWeNWsXOrpTBSnJv5Zh7LgvjI7ka2T9BU42N+HOaqRs0gNyifVHxpcD68SRkq+t0rSw/3kuwy0FS1zfhYb72XZZjOiY1cpMgF/q6UqvGgADFIAAAAAAAAAAAAAAAAAAJDQPjNP8fYkRPdOfhYPzaP7iU0I/lEPx9iRE90t54PzaP7itb56+n5fuqdfd/Vz4+kIamrzv1N/o/cKEo+FWnyU9pJ/Sl9GPoVv4z50JXg3xcUvWkveRuk8XtNQjyI/q+c5U6Q90Pni8U6k3KTzf6LmJLU6V9JYK274Zh+3EhYQuWDVCH/kMH53h+3EjCX6Jw8r5M3aSz/QjqJJU3ddJA2YH04niIRI+hUNd34WG+9l2S3lU1xxdOm6CnTVTam0ntOMoO3KX9jGdEw5QDBkv9XSlV40AAYpAAAAAAAAAAAAAAAAAABu6Hfx8fx9iREd0h+JebR9siV0V89HqqdiREd0d5YLzaPtkVvfXX0/L61Ovu/q58fSFZ7/ALNJc7y9iI+Ulfyn+hic72XBe8904JHIe99KMG9/qRatU6caeMwl+U8Xh165xITBQW/gvaSmrdTa0lg+b4Xh/wCpEkd9pI3qJq04m5SiYjaiZijEUaekNK0MPFyqVIxXS8/QgN9s5TrzpZVMUoRd40oyzW7aeRsae19lVThhouMXk6kssvqlLSebbu27tvizo7DsNy9XTXVGKI55+PdHxz/GM83k2naabdMxE/u/rx/GuWQAWtxAAAAAAAAAAAAAAAAAAAAABuaJqxhWhKUVOKTvFuyl4Mla5Ed0+t3z4LNQjCLw8bRgrQXhzVl+X9Tdpz2WnzWY0ngXjsM6ELOvSlKdCLyc4SttQX1srpda3tFe31RPHRX2Yx9YnPr5Oru6qOGqnvy5omfWnVs81cxVpyi2mnGSbi00001k009z6D5nEdFMQxkNmy/Lu/7JHVmexj8JOWXyvDbMd1k6kfCfrK5tK8brwbJO298W+vM9VtqE5R2ruMnG6fku10/QTkfquCMY3S1HDR2qlSMF0vP0LicNw/dTxqpqMnGU0ktvZW0/rPhf0Hw0dpGpinOpVbnJTsrtysrJm7Ztnq2i5FumcNV67Fqjil0DTOv9WbcMNBQj/mVE3+VcfWVLE1p1ZbdSUqkueby9CPALLs+7LFnnMcU/GfSNP7nvci7tly5yjlHd+df6juAAdB5QAAAAAAAAAAAAAAAAAAAAAAAAxbNNNprNNZNGQYV26blPDXGY72VNVVM5pnEtutjYV1s4vDUcUrJKbTpYhJbkqkWpehu3QROK1SwVbPD4qWHqO9qWLjeN+ZVYrJdcX1m2YaT3q/Wcq9ue1VztzNPnH585e23vCuOVcZ8v9eSsaX1WxuGjtVMO5U1f46jarScd93OF0vxWfqyrzZ03CV6lGW3SqToy+rJpPrjuZ6xdTD4jxnB0qsnvq4f5PXv5T2cpv7SZyr27dotc8cUf48/LXye23tlmvtx4+8ebmBbNVPm5/eftR70lq1hbbWHxNRf+rE0Zqa6pQTUvyo39GYJUKaind325Pddvo6kkbt0W6v8A0cWOUROfx49zDbqo/SxnWYbYALO4wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z' alt =''></img>
            </div>
            <div className="CartItem-info">
                <div className="info-title">
                    <h2>Apple iPhone SE</h2>
                </div>
                <div className='info-stock'>
                    In Stock
                </div>
                <div className='item-actions'>
                    <div className='item-quantity'>
                        <select>
                            <option value="1">Qty: 1</option>
                            <option value="2">Qty: 2</option>
                            <option value="3">Qty: 3</option>
                        </select>
                    </div>
                    <div className='item-actions-divider'>|</div>
                    <div className='item-delete'>
                        Delete
                    </div>
                </div>
            </div>
            <div className='CartItem-price'>
                $750
            </div>
        </div>
    )
}

export default CartItem
