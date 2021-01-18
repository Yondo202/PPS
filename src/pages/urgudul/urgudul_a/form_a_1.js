import React, { useState } from 'react'
import FormInline from 'components/urgudul_components/formInline'
import HelpPopup from 'components/helpModal/helpPopup'
import SearchSelector from 'components/urgudul_components/searchSelector'
import PenSVG from 'assets/svgComponents/penSVG'
import ChevronDownSVG from 'assets/svgComponents/chevronDownSVG'


const initialState = {
    company_name: '',
    representative_name: '',
    representative_position: '',
    registered_date: '',
    registration_number: '',
    official_address: '',
    district: '',
    telephone: '',
    handphone: '',
    email: '',
    website: '',
    company_size: '',
    project_plan: '',
}

const districts = [
    {
        id: 1,
        desc: 'Багануур',
    },
    {
        id: 2,
        desc: 'Багахангай',
    },
    {
        id: 3,
        desc: 'Баянгол',
    },
    {
        id: 4,
        desc: 'Баянзүрх',
    },
    {
        id: 5,
        desc: 'Налайх',
    },
    {
        id: 6,
        desc: 'Сонгинохайрхан',
    },
    {
        id: 7,
        desc: 'Сүхбаатар',
    },
    {
        id: 8,
        desc: 'Хан-Уул',
    },
    {
        id: 9,
        desc: 'Чингэлтэй',
    },
]

function UrgudulApplicant() {
    const [form, setForm] = useState(initialState)

    const handleInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleInputFormat = (values, name) => {
        setForm({ ...form, [name]: values.value })
    }

    const handleInputFormatted = (values, name) => {
        setForm({ ...form, [name]: values.formattedValue })
    }

    const handleSetForm = (key, value) => {
        setForm({ ...form, [key]: value })
    }

    const [openDistrict, setOpenDistrict] = useState(false)

    const handleClickDistrict = () => {
        setOpenDistrict(!openDistrict)
    }

    const handleSelectDistrict = (id) => {
        setForm({ ...form, district: id })
        setOpenDistrict(false)
    }

    return (
        <div className="tw-mt-8 tw-py-2 tw-rounded-lg tw-shadow-md tw-min-w-min tw-w-11/12 tw-max-w-5xl tw-mx-auto tw-border-t tw-border-gray-100 tw-bg-white tw-divide-y tw-divide-dashed">
            <div className="tw-font-medium tw-p-3 tw-flex tw-items-center">
                <span className="tw-text-blue-500 tw-text-xl tw-mx-2">A1</span>
                - Өргөдөл гаргагч

                {
                    'cluster_' && <HelpPopup classAppend="tw-ml-auto tw-mr-2 sm:tw-ml-12" main="Кластерын тэргүүлэх аж ахуйн нэгжийн хувиар бөглөнө үү." position="bottom" />
                }
            </div>

            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-place-items-center">
                <FormInline label="Аж ахуй нэгжийн нэр" type="text" value={form.company_name} name="company_name" onChange={handleInput} classAppend="tw-border tw-border-dashed tw-w-full tw-max-w-lg" classInput="tw-w-full" />

                <FormInline label="Аж ахуйн нэгжийг төлөөлөх албан тушаалтны овог нэр" type="text" value={form.representative_name} name="representative_name" onChange={handleInput} classAppend="tw-border tw-border-dashed tw-w-full tw-max-w-lg" classInput="tw-w-full" />

                <FormInline label="Төлөөлөгчийн албан тушаал" type="text" value={form.representative_position} name="representative_position" onChange={handleInput} classAppend="tw-border tw-border-dashed tw-w-full tw-max-w-lg" classInput="tw-w-full" />

                <FormInline label="ААН бүртгүүлсэн огноо" type="date" value={form.registered_date} name="registered_date" onChange={handleInput} classAppend="tw-border tw-border-dashed tw-w-full tw-max-w-lg" classInput="tw-w-40" />

                <FormInline label="Регистерийн дугаар" type="numberFormat" formats={{ thousandSeparator: true }} value={form.registration_number} name="registration_number" onChange={handleInputFormat} classAppend="tw-border tw-border-dashed tw-w-full tw-max-w-lg" classInput="tw-w-40" />

                <FormInline label="Албан ёсны хаяг" type="text" value={form.official_address} name="official_address" onChange={handleInput} classAppend="tw-border tw-border-dashed tw-w-full tw-max-w-lg" classInput="tw-w-full" />

                <div className="tw-relative tw-border tw-border-dashed tw-w-full tw-max-w-lg">
                    <div className="tw-mt-2 tw-pl-3 tw-pr-1 tw-flex tw-items-center">
                        <PenSVG className="tw-w-6 tw-h-6" />
                        <span className="tw-ml-2 tw-text-sm tw-font-medium tw-whitespace-nowrap">Албан ёсны хаяг</span>

                        <HelpPopup classAppend="tw-ml-auto" main="Улаанбаатар хотыг сонгосон үед дүүрэг сонгоно уу." position="bottom" />
                    </div>

                    <div className="tw-flex">
                        <SearchSelector label="Байршил" api="http://localhost:9000/api/locations" keys={['data']} value={form.official_address} name="official_address" description="description" description_mon="description_mon" setForm={handleSetForm} />

                        <div className="tw-relative tw-px-3 tw-pt-8 tw-pb-3.5 tw-flex tw-flex-col">
                            <label className={`tw-absolute tw-px-1 tw-bg-white tw-rounded-full tw-font-medium tw-whitespace-nowrap tw-top-2 tw-left-0 ${openDistrict ? 'tw-text-sm' : 'tw-text-xs tw-top-6 tw-left-4'} tw-transition-all tw-duration-300`}>
                                Дүүрэг
                            </label>

                            <button className={`tw-flex tw-items-center tw-text-sm tw-border tw-rounded-md tw-pt-2 tw-pb-1 tw-px-2 focus:tw-outline-none ${openDistrict ? 'tw-border-blue-500' : 'tw-border-gray-400'} tw-transition-colors tw-duration-300`} onClick={handleClickDistrict}>
                                <span className="tw-h-5">
                                    {districts.filter(obj => obj.id === form.district)[0] && districts.filter(obj => obj.id === form.district)[0].desc}
                                </span>

                                <ChevronDownSVG className={`tw-w-4 tw-h-4 tw-ml-auto ${openDistrict ? 'tw-text-blue-500' : 'tw-text-gray-500'} tw-transition-colors tw-duration-300`} />
                            </button>

                            <div className={`tw-text-sm tw-rounded-md tw-shadow-sm tw-border tw-border-gray-400 tw-divide-y tw-divide-dashed tw-overflow-y-auto ${openDistrict ? 'tw-visible tw-opacity-100 tw-h-48 tw-mt-2' : 'tw-invisible tw-opacity-0 tw-h-0'} tw-transition-all tw-duration-300`}>
                                {
                                    districts.map((item, i) =>
                                        <div className='tw-p-1 tw-pl-2 hover:tw-bg-blue-500 hover:tw-text-gray-50' onMouseDown={() => handleSelectDistrict(item.id)} key={item.id}>
                                            <span className="tw-font-medium tw-pr-2">{i + 1}.</span>
                                            {item.desc}
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <FormInline label="Албан газрын утас" type="numberFormat" formats={{ format: '(+976) #### ####' }} value={form.telephone} name="telephone" onChange={handleInputFormatted} classAppend="tw-border tw-border-dashed tw-w-full tw-max-w-lg" classInput="tw-w-40" />

                <FormInline label="Гар утас" type="numberFormat" formats={{ format: '(+976) #### ####' }} value={form.handphone} name="handphone" onChange={handleInputFormatted} classAppend="tw-border tw-border-dashed tw-w-full tw-max-w-lg" classInput="tw-w-40" />

                <div className="tw-border tw-border-dashed tw-w-full tw-max-w-lg tw-flex">
                    <FormInline label="Гол харилцааг авч явах имэйл хаяг" type="email" value={form.email} name="email" onChange={handleInput} classAppend="tw-flex-grow" classInput="tw-w-full" validate={true} />

                    <div className="tw-relative tw-w-2">
                        <HelpPopup classAppend="tw-right-5 tw-top-1" main="Гол харилцааг авч явах имэйл хаягийг бичнэ үү." position="top-left" />
                    </div>
                </div>

                <FormInline label="Вэбсайт" type="text" value={form.website} name="website" onChange={handleInput} classAppend="tw-border tw-border-dashed tw-w-full tw-max-w-lg" classInput="tw-w-full" />

                {/* SELECT COMP-OOR ZASNA */}
                <FormInline label="Компанийн хэмжээ" type="text" value={form.company_size} name="company_size" onChange={handleInput} classAppend="tw-border tw-border-dashed tw-w-full tw-max-w-lg" classInput="tw-w-full" />

                <div className="">
                    <table className="tw-w-full">
                        <thead>
                            <tr className="tw-h-10 tw-font-medium tw-text-base">
                                <th>Аж ахуйн нэгжийн хэмжээ</th>
                                <th>Жилийн борлуулалт (ам.дол)</th>
                                <th>Бүтэн цагийн ажилтны тоо</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tw-h-10 tw-bg-gray-100">
                                <td>Бичил</td>
                                <td>{'< $50 мян'}</td>
                                <td>{'< 10'}</td>
                            </tr>
                            <tr className="tw-h-10">
                                <td>Жижиг</td>
                                <td>{'> $50 мян ≤ $10 сая'}</td>
                                <td>{'>=10, <50'}</td>
                            </tr>
                            <tr className="tw-h-10 tw-bg-gray-100">
                                <td>Дунд</td>
                                <td>{'> $10 сая ≤ $50 сая'}</td>
                                <td>{'>=50, <250'}</td>
                            </tr>
                        </tbody>
                    </table>

                    <HelpPopup main="Аж ахуйн нэгжийн хэмжээ нь борлуулалт эсвэл бүтэн цагийн ажилтнуудын аль өндрөөр тогтоосноор ангилал нь тогтоно. Жишээ нь $30M борлуулалттай 30 хүнтэй аж ахуйн нэгжийн хувьд Дунд ангиллын аж ахуйн нэгжид хамаарна." position="top-left" />
                </div>

                <FormInline label="Төслийн төлөвлөлт, гүйцэтгэл дэх оролцоо" type="text" value={form.project_plan} name="project_plan" onChange={handleInput} classAppend="tw-border tw-border-dashed tw-w-full tw-max-w-lg" classInput="tw-w-full" />
            </div>
        </div>
    )
}

export default UrgudulApplicant