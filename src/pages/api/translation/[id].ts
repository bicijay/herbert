import type {NextApiRequest, NextApiResponse} from 'next'
import {connectToDatabase} from '../../../utils/mongodb';
import {Translation} from "../../../services/types";
import {ObjectID} from "bson";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const mongo = await connectToDatabase();
    const translation = await mongo.db
        .collection("translations")
        .findOne({_id: new ObjectID("614e6b36899af5e2342d18d0")})

    res.status(200).json(translation);
}


const createTranslation = async (translation: Translation, res: NextApiResponse) => {
    const mongo = await connectToDatabase();
    const created = await mongo.db
        .collection("translations")
        .create(translation);
};
