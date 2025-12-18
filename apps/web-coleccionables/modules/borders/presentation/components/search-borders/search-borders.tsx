// biome-ignore assist/source/organizeImports: <Auto save import>
import { cdnUrl } from "@/core/settings";
import { Field, Form, Formik } from "formik";
import { useLocation, useNavigate } from "react-router";
import {
	borderSort,
	bordersOrderBy,
	type TBorderSort,
	type TBordersOrderBy,
} from "../../../domain/consts/borders.const";

interface FormData {
	name: string;
	orderBy: TBordersOrderBy;
	sort: TBorderSort;
}
interface Props {
	sort: TBorderSort;
	orderBy: TBordersOrderBy;
	name: string;
}

export function SearchBorders({ sort, orderBy, name }: Props) {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const initValues: FormData = {
		name,
		orderBy,
		sort,
	};

	const handleSubmit = (values: FormData) => {
		const queryParams = new URLSearchParams();
		if (values.orderBy) queryParams.set("orderBy", values.orderBy);
		if (values.sort) queryParams.set("sort", values.sort);
		if (values.name) queryParams.set("name", values.name);
		navigate(`${pathname}?${queryParams.toString()}`);
	};

	return (
		<Formik initialValues={initValues} onSubmit={handleSubmit}>
			{({ values }) => (
				<Form className="flex items-center justify-center flex-wrap w-fit max-w-[80%] gap-3.5">
					<label htmlFor="search" className="relative">
						<img
							className="absolute left-2 top-[50%] transform -translate-y-[55%]"
							src={`${cdnUrl}/images/svgs/lens.svg`}
							alt="Icon Lens"
							width={16}
							height={16}
						/>
						<Field
							id="name"
							type="text"
							className="bg-gray-ultra-dark w-full px-8 py-1.5 text-md rounded-sm outline outline-gray-light focus:outline-white focus:outline-2"
							name="name"
							placeholder="Buscar por nombre"
							autoComplete="off"
						/>
					</label>
					<label htmlFor="orderBy">
						<Field
							as="select"
							id="orderBy"
							name="orderBy"
							className="bg-gray-ultra-dark rounded-sm py-1.5 text-md w-[100px] outline outline-gray-light focus:outline-white focus:outline-2"
							autoComplete="off"
						>
							<option value={bordersOrderBy.rank}>Rango</option>
							<option value={bordersOrderBy.createdAt}>Fecha</option>
						</Field>
					</label>
					<label htmlFor="sort">
						<Field
							as="select"
							id="sort"
							name="sort"
							className="bg-gray-ultra-dark rounded-sm py-1.5 text-md w-[120px] outline outline-gray-light focus:outline-white focus:outline-2"
							autoComplete="off"
						>
							<option value={borderSort.asc}>
								{values.orderBy === bordersOrderBy.rank
									? "Más bajo"
									: "Más viejo"}
							</option>
							<option value={borderSort.desc}>
								{values.orderBy === bordersOrderBy.rank
									? "Más alto"
									: "Más nuevo"}
							</option>
						</Field>
					</label>
					<button
						type="submit"
						className="bg-gray-ultra-dark font-semibold outline-2 outline-primary rounded-md text-sm hover:scale-105 duration-200 transition-transform will-change-transform px-6 py-2 cursor-pointer"
						style={{
							boxShadow: "0 0 40px 10px rgba(226, 1, 45, 0.2)",
						}}
					>
						Buscar
					</button>
				</Form>
			)}
		</Formik>
	);
}
