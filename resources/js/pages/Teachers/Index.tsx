import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import { Megaphone } from "lucide-react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Teacher',
        href: '/teacher',
    },
];

interface Teacher {
    id: number;
    fullName: string;
    teacher_id: BigInteger;
    gender: string;
    marital: string;
    email: string;
    phone: number;
    address: string;
    dob: Date;
    religion: string;
    nationality: string;
    education: string;
    qualification: string;
    experience: number;
}

interface PageProps {
    flash: {
        message?: string
    },
    teachers: Teacher[]
}

export default function Teachers({ teachers, flash }: PageProps) {
    // const { teachers, flash } = usePage().props as unknown as PageProps;

    const {processing, delete: destroy} = useForm();

    const handleDelete = (id: number, name: string) => {
        if(confirm(`Do you want to delete a product - ${id}. ${name}`)){
            destroy(route("products.destroy", id));
        }
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Teachers" />
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Teachers List</h1>
                    <Link href={route("teachers.create")}>
                        <Button>Add Teacher</Button>
                    </Link>
                </div>

                <div className='m-4'>
                    <div>
                        {flash.message && (
                            <Alert>
                                <Megaphone className="h-4 w-4" />
                                <AlertTitle>Notification!</AlertTitle>
                                <AlertDescription>
                                    {flash.message}
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>
                </div>
            </div>

            {teachers.length > 0 && (
                <div className="overflow-x-auto">
                    <Table>
                        <TableCaption>Teachers List</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Full Name</TableHead>
                                <TableHead>Gender</TableHead>
                                <TableHead>Marital Status</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>DOB</TableHead>
                                <TableHead>Address</TableHead>
                                <TableHead>Religion</TableHead>
                                <TableHead>Nationality</TableHead>
                                <TableHead>Education</TableHead>
                                <TableHead>Qualification</TableHead>
                                <TableHead>Experience</TableHead>
                                <TableHead className="text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {teachers.map((teacher) => (
                                <TableRow key={teacher.id}>
                                    <TableCell className="font-medium">{teacher.teacher_id}</TableCell>
                                    <TableCell>{teacher.fullName}</TableCell>
                                    <TableCell>{teacher.gender}</TableCell>
                                    <TableCell>{teacher.marital}</TableCell>
                                    <TableCell>{teacher.email}</TableCell>
                                    <TableCell>{teacher.phone}</TableCell>
                                    <TableCell>{teacher.dob instanceof Date ? teacher.dob.toLocaleDateString() : teacher.dob}</TableCell>
                                    <TableCell>{teacher.address}</TableCell>
                                    <TableCell>{teacher.religion}</TableCell>
                                    <TableCell>{teacher.nationality}</TableCell>
                                    <TableCell>{teacher.education}</TableCell>
                                    <TableCell>{teacher.qualification}</TableCell>
                                    <TableCell>{teacher.experience}</TableCell>
                                    <TableCell className="text-center space-x-2">
                                        <Link href={route('products.edit', teacher.id)}><Button className="bg-slate-600 hover:bg-slate-700">Edit</Button></Link>
                                        <Button disabled={processing} onClick={() => handleDelete(teacher.id, teacher.fullName)} className="bg-red-500 hover:bg-red-700">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                           
                        </TableBody>
                    </Table>
                    {/* <table className="min-w-full bg-white shadow rounded-lg">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 text-left border-b">Teacher ID</th>
                            <th className="py-2 px-4 text-left border-b">Full Name</th>
                            <th className="py-2 px-4 text-left border-b">Gender</th>
                            <th className="py-2 px-4 text-left border-b">Marital</th>
                            <th className="py-2 px-4 text-left border-b">Email</th>
                            <th className="py-2 px-4 text-left border-b">Phone</th>
                            <th className="py-2 px-4 text-left border-b">DOB</th>
                            <th className="py-2 px-4 text-left border-b">Address</th>
                            <th className="py-2 px-4 text-left border-b">Religion</th>
                            <th className="py-2 px-4 text-left border-b">Nationality</th>
                            <th className="py-2 px-4 text-left border-b">Education</th>
                            <th className="py-2 px-4 text-left border-b">Qualification</th>
                            <th className="py-2 px-4 text-left border-b">Experience</th>
                            <th className="py-2 px-4 text-left border-b">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {teachers.map((teacher) => (
                                <tr className="hover:bg-gray-50" key={teacher.id}>
                                    <td className="py-2 px-4 border-b">{teacher.fullName}</td>
                                    <td className="py-2 px-4 border-b">{teacher.teacher_id}</td>
                                    <td className="py-2 px-4 border-b">{teacher.gender}</td>
                                    <td className="py-2 px-4 border-b">{teacher.marital}</td>
                                    <td className="py-2 px-4 border-b">{teacher.email}</td>
                                    <td className="py-2 px-4 border-b">{teacher.phone}</td>
                                    <td className="py-2 px-4 border-b">{teacher.dob instanceof Date ? teacher.dob.toLocaleDateString() : teacher.dob}</td>
                                    <td className="py-2 px-4 border-b">{teacher.address}</td>
                                    <td className="py-2 px-4 border-b">{teacher.religion}</td>
                                    <td className="py-2 px-4 border-b">{teacher.nationality}</td>
                                    <td className="py-2 px-4 border-b">{teacher.education}</td>
                                    <td className="py-2 px-4 border-b">{teacher.qualification}</td>
                                    <td className="py-2 px-4 border-b">{teacher.experience}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2">
                                        <Link href={`/posts/${teacher.id}/edit`}>Edit</Link>
                                        </button>
                                        <Link
                                            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                            method="delete"
                                            onClick={(e) => {
                                                if (!confirm('Are you sure?')) {
                                                e.preventDefault();
                                                }
                                        }}
                                            href={route('teacherss.destroy', teacher.id)}
                                        >
                                            Delete
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table> */}
                </div>
            )}

                
        </AppLayout>
    );
}