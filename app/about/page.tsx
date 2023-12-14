import Background from "../components/Background"
import Sidebar from "../components/Sidebar"

export default function Albums() {
    return(
        <>
        <Background/>
        <div className='flex flex-col xl:flex-row justify-between'>
            <Sidebar/>
            <div className="grid grid-cols-2 justify-items-center gap-4 text-white">

                <div className="flex flex-col bg-[#171717d8] p-2 rounded-md gap-4">
                    <h1 className="underline underline-offset-4">Pendidikan Formal</h1>
                    <div className="flex flex-col p-1">
                        <div className="flex flex-col text-sm w-80 justify-center">
                            <p>2019 - 2022 :</p>
                            <p>SMK NEGERI 7 PONTIANAK Jurusan RPL</p>
                            <p>2022 - Sekarang : </p>
                            <p>Politeknik Negeri Pontianak Prodi Teknik Informatika</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-[#171717d8] p-2 rounded-md gap-4">
                    <h1 className="underline underline-offset-4">Pendidikan Formal</h1>
                    <div className="flex flex-col p-1">
                        <div className="flex flex-col text-sm w-80 justify-center">
                            <p>2019 - 2022 :</p>
                            <p>SMK NEGERI 7 PONTIANAK Jurusan RPL</p>
                            <p>2022 - Sekarang : </p>
                            <p>Politeknik Negeri Pontianak Prodi Teknik Informatika</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-[#171717d8] p-2 rounded-md gap-4">
                    <h1 className="underline underline-offset-4">Pendidikan Formal</h1>
                    <div className="flex flex-col p-1">
                        <div className="flex flex-col text-sm w-80 justify-center">
                            <p>2019 - 2022 :</p>
                            <p>SMK NEGERI 7 PONTIANAK Jurusan RPL</p>
                            <p>2022 - Sekarang : </p>
                            <p>Politeknik Negeri Pontianak Prodi Teknik Informatika</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col bg-[#171717d8] p-2 rounded-md gap-4">
                    <h1 className="underline underline-offset-4">Pendidikan Formal</h1>
                    <div className="flex flex-col p-1">
                        <div className="flex flex-col text-sm w-80 justify-center">
                            <p>2019 - 2022 :</p>
                            <p>SMK NEGERI 7 PONTIANAK Jurusan RPL</p>
                            <p>2022 - Sekarang : </p>
                            <p>Politeknik Negeri Pontianak Prodi Teknik Informatika</p>
                        </div>
                    </div>
                </div>

                
                
            </div>
        </div>
        </>
    )
}