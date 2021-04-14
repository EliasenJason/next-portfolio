import { EducationCard } from '../components/index'


const ContainerEducationCard = ({data}) => {

    

    console.log(data)

    return (
        <EducationCard>
            {data.map((item) => {
                return (
                    <h1>{item.name}</h1>
                )
            })}
        </EducationCard>
    )
}

export default ContainerEducationCard