import { EducationCard } from '../components/index'


const ContainerEducationCard = ({data}) => {

    

    console.log(data)

    return (
        <EducationCard>
            {data.map((item) => {
                return (
                    <>
                    {item.picture}
                    </>
                )
            })}
        </EducationCard>
    )
}

export default ContainerEducationCard