import Models from '../models/index.js'
const { WebsiteReviews } = Models

const getWebsiteReviews = async (req, res) => {
    try {
        const websiteReviews = await WebsiteReviews.findAll()
        res.status(200).json(websiteReviews)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getWebsiteReviewById = async (req, res) => {
    try {
        const websiteReview = await WebsiteReviews.findById(req.params.id)
        if (websiteReview) {
            return res.status(200).json(websiteReview)
        } else {
            return res.status(404).json({ message: 'Website Review not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createWebsiteReview = async (req, res) => {
    try {
        const websiteReview = await WebsiteReviews.create(req.body)
        await websiteReview.save()
        res.status(201).json(websiteReview)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateWebsiteReview = async (req, res) => {
    try {
        const websiteReview = await WebsiteReviews.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (websiteReview) {
        return res.status(200).json(websiteReview)
        } else {
            return res.status(404).json({ message: 'Website Review not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteWebsiteReview = async (req, res) => {
    try {
        const websiteReview = await WebsiteReviews.findByIdAndDelete(req.params.id)
        if (websiteReview) {
            return res.status(200).json(websiteReview)
        } else {
            return res.status(404).json({ message: 'Website Review not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export default { getWebsiteReviews, getWebsiteReviewById, createWebsiteReview, updateWebsiteReview, deleteWebsiteReview }